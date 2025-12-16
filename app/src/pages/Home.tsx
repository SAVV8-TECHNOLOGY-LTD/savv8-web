import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { partnerBrands } from "@/constants/brandData";
import appleLogo from "@/assets/brandLogos/appleLogo.png";
import nikeLogo from "@/assets/brandLogos/nike_logo.png";
import starbucksLogo from "@/assets/brandLogos/temu_logo.png";
import amazonLogo from "@/assets/brandLogos/booking.com_logo.png";
import appScreenshot1 from "@/assets/screenshots/app-home.png";
import appScreenshot2 from "@/assets/screenshots/app-offers.png";
import {
  Search,
  Sparkles,
  TrendingUp,
  Zap,
  Clock,
  Heart,
  Star,
  ArrowRight,
  Gift,
  Percent,
  Tag,
  Users,
  Globe,
  ShoppingBag,
  Smartphone,
  Bell,
  Shield,
  Wallet,
  CheckCircle,
  Download,
  Apple,
  Play,
  User,
} from "lucide-react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample data - Replace with actual API calls
  const featuredOffers = [
    {
      id: 1,
      brand: "Booking.com",
      title: "50% Off Travel Bookings",
      description: "Get massive discounts on hotels, flights, and vacation packages",
      discount: "50%",
      category: "Travel",
      image: amazonLogo,
      expiresIn: "2 days",
      saves: 1234,
      isFeatured: true,
    },
    {
      id: 2,
      brand: "Nike",
      title: "Sports Gear Sale",
      description: "Premium athletic wear and footwear at unbeatable prices",
      discount: "40%",
      category: "Sports",
      image: nikeLogo,
      expiresIn: "5 days",
      saves: 892,
      isFeatured: true,
    },
    {
      id: 3,
      brand: "Apple",
      title: "Tech & Electronics",
      description: "Get exclusive deals on the latest Apple products and accessories",
      discount: "25%",
      category: "Electronics",
      image: appleLogo,
      expiresIn: "1 week",
      saves: 2341,
      isFeatured: true,
    },
  ];

  const categories = [
    { name: "All", icon: Globe, count: 150 },
    { name: "Electronics", icon: Zap, count: 45 },
    { name: "Fashion", icon: ShoppingBag, count: 38 },
    { name: "Food & Dining", icon: Gift, count: 28 },
    { name: "Travel", icon: Globe, count: 22 },
    { name: "Entertainment", icon: Star, count: 17 },
  ];

  const stats = [
    { label: "Active Offers", value: "500+", icon: Tag },
    { label: "Happy Users", value: "10K+", icon: Users },
    { label: "Partner Brands", value: "200+", icon: Sparkles },
    { label: "Avg Savings", value: "35%", icon: TrendingUp },
  ];

  // Use partner brands from brandData
  const topBrands = partnerBrands.slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 bg-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#c4ff61] rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#b1ff2e] rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#d7ff94] rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 my-12">
        
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#c4ff61] leading-tight">
              Discover Amazing
              <br />
              Discounts & Deals
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your one-stop platform for exclusive offers, promo codes, and cashback deals
              from top brands worldwide. Start saving today!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-[#c4ff61] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-200" />
                <div className="relative flex items-center bg-white rounded-2xl shadow-xl">
                  <Search className="w-6 h-6 text-gray-400 ml-6" />
                  <Input
                    type="text"
                    placeholder="Search for brands, products, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 text-lg py-6 px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button className="m-2 bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold px-8 py-6 rounded-xl">
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Category Pills */}
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {["Electronics", "Fashion", "Food", "Travel", "Entertainment"].map((cat) => (
                <Badge
                  key={cat}
                  variant="outline"
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-[#eaffc7] hover:border-[#c4ff61] border-gray-600 text-gray-300 transition-all"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#b1ff2e]" />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Offers Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Badge className="bg-purple-100 text-purple-700 border-0 mb-3">
                <Zap className="w-3 h-3 mr-1" />
                Hot Deals
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900">Featured Offers</h2>
              <p className="text-gray-600 mt-2">Handpicked deals you don't want to miss</p>
            </div>
            <Link to="/offers">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredOffers.map((offer) => (
              <Card
                key={offer.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <img
                      src={offer.image}
                      alt={offer.brand}
                      className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white border-0 text-lg px-3 py-1">
                    <Percent className="w-4 h-4 mr-1 inline" />
                    {offer.discount} OFF
                  </Badge>
                  <Badge className="absolute bottom-4 left-4 bg-white/90 text-gray-700 border-0">
                    <Clock className="w-3 h-3 mr-1" />
                    {offer.expiresIn}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl group-hover:text-[#b1ff2e] transition-colors">
                        {offer.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{offer.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Heart className="w-4 h-4 mr-1 text-red-400" />
                    {offer.saves.toLocaleString()} saves
                  </div>
                  <Button className="bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold">
                    Get Deal
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#eaffc7] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 border-0 mb-3">
              <Tag className="w-3 h-3 mr-1" />
              Explore
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Browse by Category</h2>
            <p className="text-gray-600 mt-2">Find the perfect deal in your favorite category</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#eaffc7] to-[#d7ff94] flex items-center justify-center group-hover:from-[#c4ff61] group-hover:to-[#b1ff2e] transition-all">
                    <category.icon className="w-8 h-8 text-black group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} offers</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the App Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-0 mb-3">
              <Smartphone className="w-3 h-3 mr-1" />
              About Savv8
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Your Smart Savings Companion</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Savv8 is your all-in-one platform for discovering and managing exclusive discounts, 
              promo codes, and cashback deals from top brands worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#eaffc7] to-[#d7ff94] flex items-center justify-center">
                  <Bell className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Real-Time Alerts</h3>
                <p className="text-gray-600 text-sm">
                  Get instant notifications when new deals match your interests and preferences
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#d7ff94] to-[#c4ff61] flex items-center justify-center">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Verified Deals</h3>
                <p className="text-gray-600 text-sm">
                  All offers are verified and tested to ensure they work when you need them
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#c4ff61] to-[#b1ff2e] flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Track Savings</h3>
                <p className="text-gray-600 text-sm">
                  Monitor how much you've saved with detailed analytics and reports
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#eaffc7] to-[#d7ff94] flex items-center justify-center">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Personalized</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered recommendations based on your shopping habits and preferences
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-[#eaffc7] to-[#d7ff94] rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">How Savv8 Works</h3>
              <p className="text-gray-600">Get started in three simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  1
                </div>
                <h4 className="font-semibold text-xl mb-3">Browse Offers</h4>
                <p className="text-gray-600">
                  Explore thousands of exclusive deals from top brands across all categories
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  2
                </div>
                <h4 className="font-semibold text-xl mb-3">Save Favorites</h4>
                <p className="text-gray-600">
                  Mark your favorite deals and get notified before they expire
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  3
                </div>
                <h4 className="font-semibold text-xl mb-3">Start Saving</h4>
                <p className="text-gray-600">
                  Redeem offers with one click and track your total savings over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: App Info */}
            <div className="order-2 lg:order-1">
              <Badge className="bg-[#c4ff61]/20 text-[#c4ff61] border-0 mb-4">
                <Download className="w-3 h-3 mr-1" />
                Mobile App
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#c4ff61]">
                Download Savv8 App
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Take your savings on the go! Access exclusive mobile-only deals, 
                get instant notifications, and never miss a discount again.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Lightning Fast</h4>
                    <p className="text-purple-200 text-sm">
                      Optimized for speed - browse thousands of offers instantly
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Push Notifications</h4>
                    <p className="text-purple-200 text-sm">
                      Never miss a deal with smart, personalized alerts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Offline Access</h4>
                    <p className="text-purple-200 text-sm">
                      View saved offers even without an internet connection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Secure & Private</h4>
                    <p className="text-purple-200 text-sm">
                      Your data is encrypted and never shared with third parties
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#c4ff61] text-black hover:bg-[#b1ff2e] font-semibold px-6 py-6 rounded-xl"
                >
                  <Apple className="w-5 h-5 mr-2" />
                  App Store
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-[#c4ff61]/10 text-[#c4ff61] border-[#c4ff61]/30 hover:bg-[#c4ff61]/20 px-6 py-6 rounded-xl backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>

            {/* Right: App Screenshots */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 flex gap-6 justify-center">
                {/* First Phone - Home Screen */}
                <div className="relative w-[240px] md:w-[280px]">
                  <div className="absolute inset-0 bg-[#c4ff61] rounded-[3rem] blur-2xl opacity-30" />
                  <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800">
                    <div className="bg-black rounded-[2.5rem] overflow-hidden">
                      {/* App Screenshot */}
                      <div className="bg-black aspect-[9/19.5] relative overflow-hidden">
                        <img 
                          src={appScreenshot1} 
                          alt="Savv8 Mobile App Home Screen" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Phone - Offers Screen */}
                <div className="relative w-[240px] md:w-[280px] hidden md:block">
                  <div className="absolute inset-0 bg-[#c4ff61] rounded-[3rem] blur-2xl opacity-30" />
                  <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800">
                    <div className="bg-black rounded-[2.5rem] overflow-hidden">
                      {/* Offers Screenshot */}
                      <div className="bg-black aspect-[9/19.5] relative overflow-hidden">
                        <img 
                          src={appScreenshot2} 
                          alt="Savv8 Mobile App Offers Screen" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 border-0 mb-3">
              <Sparkles className="w-3 h-3 mr-1" />
              Partners
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Top Brands</h2>
            <p className="text-gray-600 mt-2">Exclusive deals from the brands you love</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {topBrands.map((brand, index) => (
              <div
                key={index}
                className="group aspect-square bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100 flex items-center justify-center p-6"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/offers">
              <Button
                size="lg"
                className="bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold px-8 py-6 text-lg rounded-xl"
              >
                Explore All Brands
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who Can Save Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Who Can Save with Savv8
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Savv8 is for everyone! Whether you're a frontline hero, a student, or simply looking to save money, 
              we have exclusive discounts and deals tailored for you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Students & Graduates",
              "Healthcare Workers",
              "Emergency Services",
              "Armed Forces & Veterans",
              "Teachers & Educators",
              "Social Care Workers",
              "Families & Parents",
              "Young Professionals",
              "Seniors & Retirees",
              "Small Business Owners",
              "Freelancers",
              "Hospitality Workers",
              "Retail Employees",
              "Tech Professionals",
              "Everyone Else",
            ].map((group, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-4 bg-gradient-to-br from-[#eaffc7] to-[#d7ff94] rounded-xl border border-[#c4ff61]/20 hover:border-[#c4ff61] transition-all hover:shadow-lg"
              >
                <CheckCircle className="w-5 h-5 text-[#b1ff2e] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{group}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              No verification required for most deals. Simply sign up and start saving today!
            </p>
            <Button
              size="lg"
              className="bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold px-8 py-6 text-lg rounded-xl"
            >
              Start Saving Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-[#1a1a1a] to-black">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse text-[#c4ff61]" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#c4ff61]">
            Never Miss a Deal Again
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of savvy shoppers and get instant notifications about
            exclusive deals tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-[#c4ff61]/20 text-white placeholder:text-gray-400 py-6 px-6 rounded-xl backdrop-blur-sm focus-visible:ring-[#c4ff61]"
            />
            <Button
              size="lg"
              className="bg-[#c4ff61] text-black hover:bg-[#b1ff2e] px-8 py-6 rounded-xl font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
