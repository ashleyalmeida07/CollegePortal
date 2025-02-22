import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
from sqlalchemy.dialects.postgresql import JSONB

# Load environment variables
load_dotenv()

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///app.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# User Profile Model
class UserProfile(db.Model):
    __tablename__ = 'user_profiles'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    skills = db.Column(JSONB)
    description = db.Column(db.Text)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'location': self.location,
            'skills': self.skills,
            'description': self.description
        }

# Create tables
def create_tables():
    with app.app_context():
        db.create_all()

# Save Profile Endpoint
@app.route('/api/save-profile', methods=['POST'])
def save_profile():
    try:
        data = request.json
        
        # Find existing profile by email
        existing_profile = UserProfile.query.filter_by(email=data['email']).first()
        
        if existing_profile:
            # Update existing profile
            existing_profile.name = data['name']
            existing_profile.phone = data['phone']
            existing_profile.location = data['location']
            existing_profile.skills = data['skills']
            existing_profile.description = data.get('description', '')
        else:
            # Create new profile
            new_profile = UserProfile(
                name=data['name'],
                email=data['email'],
                phone=data['phone'],
                location=data['location'],
                skills=data['skills'],
                description=data.get('description', '')
            )
            db.session.add(new_profile)
        
        # Commit changes
        db.session.commit()
        
        return jsonify({'message': 'Profile saved successfully'}), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# Get Latest Profile Endpoint
@app.route('/api/profile', methods=['GET'])
def get_profile():
    try:
        # Get most recently added profile
        profile = UserProfile.query.order_by(UserProfile.id.desc()).first()
        
        if not profile:
            return jsonify({'error': 'No profile found'}), 404
        
        return jsonify(profile.to_dict())
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Create tables on startup
create_tables()

# Run the application
if __name__ == '__main__':
    app.run(debug=True)