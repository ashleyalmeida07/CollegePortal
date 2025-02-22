import logging
import re
from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import bcrypt
import traceback

# Configure logging
logging.basicConfig(level=logging.DEBUG, 
                    format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database configuration
DB_CONFIG = {
    'dbname': 'neondb',
    'user': 'neondb_owner',
    'password': 'npg_JNBch1uP2WAw',
    'host': 'ep-blue-recipe-a8uta48m-pooler.eastus2.azure.neon.tech',
    'sslmode': 'require'
}

def get_db_connection():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        return conn
    except (Exception, psycopg2.Error) as error:
        logger.error(f"Database connection error: {error}")
        return None

def create_users_table():
    conn = get_db_connection()
    if conn is None:
        logger.error("Failed to establish database connection")
        return False
    
    try:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            )
        """)
        conn.commit()
        cursor.close()
        conn.close()
        logger.info("Users table created or already exists")
        return True
    except (Exception, psycopg2.Error) as error:
        logger.error(f"Error creating users table: {error}")
        return False

def validate_input(name, email, password):
    """Validate user input with comprehensive checks"""
    if not name or len(name.strip()) < 2:
        return False, "Name must be at least 2 characters long"
    
    if not email or not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return False, "Invalid email format"
    
    if not password or len(password) < 8:
        return False, "Password must be at least 8 characters long"
    
    return True, "Valid input"

@app.route("/signup", methods=["POST"])
def signup():
    try:
        data = request.get_json()
        name = data.get("name", "").strip()
        email = data.get("email", "").strip()
        password = data.get("password", "")

        # Comprehensive input validation
        is_valid, validation_message = validate_input(name, email, password)
        if not is_valid:
            return jsonify({"error": validation_message}), 400

        logger.info(f"Signup attempt - Name: {name}, Email: {email}")

        # Establish database connection
        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Database connection failed"}), 500

        cursor = conn.cursor()

        try:
            # Check if email already exists
            cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
            existing_user = cursor.fetchone()
            if existing_user:
                return jsonify({"error": "Email is already in use"}), 400

            # Hash the password with a strong salt
            hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt(rounds=12))

            # Insert user into the database
            cursor.execute(
                "INSERT INTO users (name, email, password) VALUES (%s, %s, %s) RETURNING id, name, email",
                (name, email, hashed_password.decode('utf-8'))
            )
            user = cursor.fetchone()
            conn.commit()

            logger.info(f"User created successfully: {email}")
            return jsonify({
                "message": "User created successfully",
                "user": {"id": user[0], "name": user[1], "email": user[2]}
            }), 201

        except psycopg2.Error as db_error:
            conn.rollback()
            logger.error(f"Database insertion error: {db_error}")
            return jsonify({"error": f"Database error: {str(db_error)}"}), 500
        finally:
            cursor.close()
            conn.close()

    except Exception as error:
        logger.error(f"Unexpected signup error: {error}")
        logger.error(traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(error)}"}), 500

@app.route("/signin", methods=["POST"])
def signin():
    try:
        data = request.get_json()
        email = data.get("email", "").strip()
        password = data.get("password", "")

        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        logger.info(f"Signin attempt for email: {email}")

        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Database connection failed"}), 500

        cursor = conn.cursor()

        try:
            cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
            user = cursor.fetchone()

            if user and bcrypt.checkpw(password.encode("utf-8"), user[3].encode("utf-8")):
                logger.info(f"Signin successful for: {email}")
                return jsonify({
                    "message": "Signin successful",
                    "user": {"id": user[0], "name": user[1], "email": user[2]}
                }), 200
            else:
                logger.warning(f"Invalid credentials for: {email}")
                return jsonify({"error": "Invalid credentials"}), 400
        
        except psycopg2.Error as db_error:
            logger.error(f"Database query error: {db_error}")
            return jsonify({"error": "Database error during authentication"}), 500
        finally:
            cursor.close()
            conn.close()

    except Exception as error:
        logger.error(f"Unexpected signin error: {error}")
        logger.error(traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(error)}"}), 500

if __name__ == "__main__":
    create_users_table()
    app.run(debug=True, host='0.0.0.0', port=5000)
    