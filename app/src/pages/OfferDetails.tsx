import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  Heart,
  Share2,
  Copy,
  Clock,
  Tag,
  TrendingUp,
  Users,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowLeft,
  Star,
  Zap,
  Calendar,
  Building,
  Gift,
} from "lucide-react";

const OfferDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  // Sample offer data - Replace with actual API call
  const offer = {
    id: id,
    brand: "Amazon",
    title: "50% Off Electronics & Gadgets",
    description:
      "Get massive discounts on a wide range of electronics including laptops, tablets, smartphones, and accessories. Limited time offer for verified students and professionals.",
    fullDescription:
      "This exclusive Amazon deal offers an incredible 50% discount on premium electronics and gadgets. Whether you're looking for the latest laptop, a powerful tablet, or cutting-edge accessories, this offer has you covered. Perfect for students preparing for the new semester or professionals upgrading their tech arsenal. Don't miss out on this limited-time opportunity to save big on quality electronics.",
    discount: "50%",
    discountType: "percentage",
    promoCode: "SAVE50TECH",
    category: "Electronics",
    image: "https://logo.clearbit.com/amazon.com",
    bannerImage: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200",
    expiresAt: "2025-12-31T23:59:59Z",
    saves: 1234,
    views: 15678,
    isFeatured: true,
    isNew: false,
    userTypes: ["student", "professional"],
    tags: ["tech", "electronics", "laptops", "gadgets"],
    termsAndConditions: [
      "Valid for new and existing customers",
      "Cannot be combined with other offers",
      "Minimum purchase of $100 required",
      "Valid on selected products only",
      "One use per customer",
    ],
    howToRedeem: [
      "Visit the Amazon website or app",
      "Add eligible products to your cart",
      "Apply the promo code at checkout",
      "Discount will be automatically applied",
      "Complete your purchase",
    ],
    websiteUrl: "https://amazon.com",
    startDate: "2025-12-01T00:00:00Z",
    createdAt: "2025-12-10T10:00:00Z",
  };

  const relatedOffers = [
    {
      id: 2,
      brand: "Best Buy",
      title: "Tech Sale - 40% Off",
      discount: "40%",
      image: "https://logo.clearbit.com/bestbuy.com",
      category: "Electronics",
    },
    {
      id: 3,
      brand: "Apple",
      title: "Student Discount",
      discount: "20%",
      image: "https://logo.clearbit.com/apple.com",
      category: "Electronics",
    },
    {
      id: 4,
      brand: "Walmart",
      title: "Electronics Bundle",
      discount: "30%",
      image: "https://logo.clearbit.com/walmart.com",
      category: "Electronics",
    },
  ];

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Offer removed from saved" : "Offer saved!");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: offer.title,
        text: offer.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(offer.promoCode);
    setCodeCopied(true);
    toast.success("Promo code copied!");
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const daysUntilExpiry = Math.ceil(
    (new Date(offer.expiresAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 -ml-4 group"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Offers
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Banner Image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
              <img
                src={offer.bannerImage}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={offer.image}
                    alt={offer.brand}
                    className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg"
                  />
                  <div>
                    <Badge className="bg-white text-gray-900 border-0 mb-2">
                      {offer.category}
                    </Badge>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                      {offer.title}
                    </h1>
                  </div>
                </div>
              </div>
              {offer.isFeatured && (
                <Badge className="absolute top-6 right-6 bg-yellow-500 text-white border-0">
                  <Star className="w-4 h-4 mr-1" />
                  Featured
                </Badge>
              )}
            </div>

            {/* Offer Info Card */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">About This Offer</CardTitle>
                    <CardDescription className="text-base">
                      {offer.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Heart className="w-5 h-5 mx-auto mb-2 text-purple-600" />
                    <div className="text-2xl font-bold text-gray-900">{offer.saves.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Saves</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <TrendingUp className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-900">{offer.views.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Views</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Clock className="w-5 h-5 mx-auto mb-2 text-green-600" />
                    <div className="text-2xl font-bold text-gray-900">{daysUntilExpiry}</div>
                    <div className="text-sm text-gray-600">Days Left</div>
                  </div>
                </div>

                <Separator />

                {/* Full Description */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{offer.fullDescription}</p>
                </div>

                <Separator />

                {/* Tabs */}
                <Tabs defaultValue="redeem" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="redeem">How to Redeem</TabsTrigger>
                    <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="redeem" className="mt-6">
                    <div className="space-y-4">
                      {offer.howToRedeem.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="terms" className="mt-6">
                    <ul className="space-y-3">
                      {offer.termsAndConditions.map((term, index) => (
                        <li key={index} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{term}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>

                <Separator />

                {/* Tags */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {offer.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="px-3 py-1">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Card */}
            <Card className="border-0 shadow-lg sticky top-24">
              <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-xl">
                <div className="text-center space-y-2">
                  <div className="text-5xl font-bold">{offer.discount}</div>
                  <div className="text-purple-100">Discount</div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {/* Promo Code */}
                {offer.promoCode && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 border-2 border-dashed border-purple-300 rounded-lg px-4 py-3 font-mono text-lg font-bold text-center">
                        {offer.promoCode}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-auto border-purple-300"
                        onClick={handleCopyCode}
                      >
                        {codeCopied ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Expiry Warning */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-amber-900">Expires Soon!</div>
                    <div className="text-sm text-amber-700">
                      Offer ends in {daysUntilExpiry} days
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg"
                    onClick={() => window.open(offer.websiteUrl, "_blank")}
                  >
                    Get This Deal
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className={`${
                        isSaved ? "bg-red-50 border-red-300 text-red-600" : ""
                      }`}
                      onClick={handleSave}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${isSaved ? "fill-current" : ""}`} />
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Button variant="outline" onClick={handleShare}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Offer Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Valid Until
                    </span>
                    <span className="font-medium">
                      {new Date(offer.expiresAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      User Types
                    </span>
                    <span className="font-medium capitalize">
                      {offer.userTypes.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      Provider
                    </span>
                    <span className="font-medium">{offer.brand}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Offers */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Related Offers</h2>
              <p className="text-gray-600 mt-2">More deals you might like</p>
            </div>
            <Link to="/offers">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedOffers.map((relatedOffer) => (
              <Link key={relatedOffer.id} to={`/offer/${relatedOffer.id}`}>
                <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="relative h-40 bg-gradient-to-br from-purple-100 to-blue-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={relatedOffer.image}
                        alt={relatedOffer.brand}
                        className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <Badge className="absolute top-3 right-3 bg-red-500 text-white border-0">
                      {relatedOffer.discount} OFF
                    </Badge>
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">
                      {relatedOffer.category}
                    </Badge>
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                      {relatedOffer.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
