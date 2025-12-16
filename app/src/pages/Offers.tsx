import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  SlidersHorizontal,
  Heart,
  Clock,
  Percent,
  TrendingUp,
  Zap,
  Star,
  Filter,
  X,
} from "lucide-react";

const Offers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  // Sample offers data - Replace with actual API
  const offers = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    brand: ["Amazon", "Nike", "Spotify", "Netflix", "Apple", "Walmart", "Target", "Best Buy"][i % 8],
    title: [
      "50% Off Electronics",
      "Sports Gear Sale",
      "Premium Membership",
      "Streaming Deals",
      "Tech Accessories",
      "Grocery Discounts",
      "Home Essentials",
      "Gaming Sale",
    ][i % 8],
    description: "Amazing discounts on premium products and services",
    discount: ["50%", "40%", "30%", "25%", "20%", "15%"][i % 6],
    category: ["Electronics", "Sports", "Entertainment", "Streaming", "Tech", "Grocery", "Home", "Gaming"][i % 8],
    image: `https://logo.clearbit.com/${["amazon.com", "nike.com", "spotify.com", "netflix.com", "apple.com", "walmart.com", "target.com", "bestbuy.com"][i % 8]}`,
    expiresIn: ["2 days", "5 days", "1 week", "2 weeks"][i % 4],
    saves: Math.floor(Math.random() * 5000) + 100,
    isFeatured: i % 5 === 0,
    isNew: i % 7 === 0,
    userType: ["student", "general", "professional"][i % 3],
  }));

  const categories = [
    "All Categories",
    "Electronics",
    "Fashion",
    "Food & Dining",
    "Travel",
    "Entertainment",
    "Sports",
    "Health & Beauty",
    "Home & Garden",
  ];

  const userTypes = ["All Users", "Students", "Professionals", "Seniors"];

  const discountRanges = [
    { label: "Any Discount", value: "all" },
    { label: "50% or more", value: "50+" },
    { label: "30-50%", value: "30-50" },
    { label: "10-30%", value: "10-30" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Deals
          </h1>
          <p className="text-lg text-gray-600">
            Browse through {offers.length}+ exclusive offers from top brands
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search offers, brands, or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-base border-gray-200 focus-visible:ring-purple-600"
              />
            </div>

            {/* Category Select */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-[200px] py-6 border-gray-200">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase().replace(/\s+/g, "-")}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort Select */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-[200px] py-6 border-gray-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="discount">Highest Discount</SelectItem>
                <SelectItem value="expiring">Expiring Soon</SelectItem>
              </SelectContent>
            </Select>

            {/* Filters Button */}
            <Button
              variant="outline"
              className="lg:w-auto py-6 border-gray-200"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                {/* User Type Filter */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">User Type</h3>
                  <div className="space-y-2">
                    {userTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <label htmlFor={type} className="text-sm text-gray-700 cursor-pointer">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Discount Range Filter */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Discount Range</h3>
                  <div className="space-y-2">
                    {discountRanges.map((range) => (
                      <div key={range.value} className="flex items-center space-x-2">
                        <Checkbox id={range.value} />
                        <label htmlFor={range.value} className="text-sm text-gray-700 cursor-pointer">
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offer Status Filter */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Offer Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="featured" />
                      <label htmlFor="featured" className="text-sm text-gray-700 cursor-pointer">
                        Featured Only
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="new" />
                      <label htmlFor="new" className="text-sm text-gray-700 cursor-pointer">
                        New Offers
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expiring" />
                      <label htmlFor="expiring" className="text-sm text-gray-700 cursor-pointer">
                        Expiring Soon
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" onClick={() => setShowFilters(false)}>
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Active Filters Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="px-3 py-1">
            All Categories
            <X className="w-3 h-3 ml-2 cursor-pointer" />
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            Newest First
            <X className="w-3 h-3 ml-2 cursor-pointer" />
          </Badge>
        </div>

        {/* Offers Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-white border border-gray-200 p-1 mb-6">
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Zap className="w-4 h-4 mr-2" />
              All Offers
            </TabsTrigger>
            <TabsTrigger value="featured" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Star className="w-4 h-4 mr-2" />
              Featured
            </TabsTrigger>
            <TabsTrigger value="trending" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="expiring" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Clock className="w-4 h-4 mr-2" />
              Expiring Soon
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <OffersGrid offers={offers} />
          </TabsContent>
          <TabsContent value="featured">
            <OffersGrid offers={offers.filter((o) => o.isFeatured)} />
          </TabsContent>
          <TabsContent value="trending">
            <OffersGrid offers={offers.sort((a, b) => b.saves - a.saves)} />
          </TabsContent>
          <TabsContent value="expiring">
            <OffersGrid offers={offers.filter((o) => o.expiresIn.includes("days"))} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Offers Grid Component
const OffersGrid = ({ offers }: { offers: any[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {offers.map((offer) => (
        <Link key={offer.id} to={`/offer/${offer.id}`}>
          <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
            <div className="relative h-40 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={offer.image}
                  alt={offer.brand}
                  className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <Badge className="absolute top-3 right-3 bg-red-500 text-white border-0 font-bold">
                <Percent className="w-3 h-3 mr-1 inline" />
                {offer.discount}
              </Badge>
              {offer.isFeatured && (
                <Badge className="absolute top-3 left-3 bg-yellow-500 text-white border-0">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              {offer.isNew && (
                <Badge className="absolute top-3 left-3 bg-green-500 text-white border-0">
                  <Zap className="w-3 h-3 mr-1" />
                  New
                </Badge>
              )}
              <Badge className="absolute bottom-3 left-3 bg-white/90 text-gray-700 border-0 text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {offer.expiresIn}
              </Badge>
              <Button
                size="icon"
                variant="ghost"
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white h-8 w-8 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle save/unsave
                }}
              >
                <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
              </Button>
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {offer.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors line-clamp-1">
                    {offer.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1 line-clamp-2">
                    {offer.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="pt-0 flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Heart className="w-3 h-3 mr-1 text-red-400" />
                {offer.saves.toLocaleString()}
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-xs"
              >
                View Deal
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Offers;
