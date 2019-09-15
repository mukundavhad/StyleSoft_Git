using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Offers
    {
        public int PkId { get; set; }
        public string SalonOwnerMobile { get; set; }
        public int? ShopLocationId { get; set; }
        public string OfferId { get; set; }
        public DateTime? OfferDate { get; set; }
        public string OfferType { get; set; }
        public string OfferDescription { get; set; }
        public DateTime? OfferValidUntil { get; set; }
    }
}
