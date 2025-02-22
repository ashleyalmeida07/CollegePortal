import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Geometric Shapes */}
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0">
          {/* Decorative shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500 rounded-lg rotate-45 opacity-40"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-green-400 rounded-full opacity-30"></div>
          <div className="absolute top-10 right-1/3 w-20 h-20 bg-red-400 rotate-12 opacity-40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center space-y-4 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">SkillBuddy Blog</h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Stay updated with the latest insights, tutorials, and news about skills development
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-8" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-purple-500 hover:bg-purple-600 cursor-pointer">All</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600 cursor-pointer">Tutorial</Badge>
            <Badge className="bg-green-500 hover:bg-green-600 cursor-pointer">Career</Badge>
            <Badge className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer">Development</Badge>
            <Badge className="bg-pink-500 hover:bg-pink-600 cursor-pointer">Business</Badge>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Featured Post</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300 rotate-45 opacity-50"></div>
            </div>
          </div>
          <div className="space-y-4">
            <Badge className="bg-purple-500">Tutorial</Badge>
            <h3 className="text-2xl font-bold">How to Master Full-Stack Development in 2024</h3>
            <p className="text-muted-foreground">
              A comprehensive guide to becoming a full-stack developer, covering essential technologies, best practices,
              and career opportunities.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div>
                <p className="font-medium">Albesha Correiea</p>
                <p className="text-sm text-muted-foreground">Jan 24, 2024</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((post, index) => (
            <article key={post} className="group cursor-pointer">
              <div
                className={`relative aspect-video rounded-xl overflow-hidden 
                ${
                  index % 3 === 0
                    ? "bg-gradient-to-br from-blue-500 to-purple-500"
                    : index % 3 === 1
                      ? "bg-gradient-to-br from-green-500 to-teal-500"
                      : "bg-gradient-to-br from-orange-500 to-pink-500"
                }`}
              >
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-full opacity-20"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rotate-45 opacity-20"></div>
                </div>
              </div>
              <Badge
                className={`mb-2 mt-4
                ${index % 3 === 0 ? "bg-blue-500" : index % 3 === 1 ? "bg-green-500" : "bg-orange-500"}`}
              >
                Development
              </Badge>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary">Understanding Modern Web Architecture</h3>
              <p className="text-muted-foreground mb-4">
                Learn about the latest trends in web architecture and how to implement them in your projects.
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full 
                  ${
                    index % 3 === 0
                      ? "bg-gradient-to-r from-blue-400 to-purple-400"
                      : index % 3 === 1
                        ? "bg-gradient-to-r from-green-400 to-teal-400"
                        : "bg-gradient-to-r from-orange-400 to-pink-400"
                  }`}
                ></div>
                <div>
                  <p className="text-sm font-medium">Elson Machadho</p>
                  <p className="text-xs text-muted-foreground">Jan 20, 2024</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
          >
            Load More Posts
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative mt-16 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-full right-0 w-56 h-56 bg-white rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rotate-45 opacity-10 -translate-y-1/2"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and updates delivered straight to your inbox. No spam, unsubscribe at
            any time.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 text-white placeholder:text-gray-200 border-white/20"
            />
            <Button type="submit" className="bg-white text-purple-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

