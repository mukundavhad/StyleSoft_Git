using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Offers
    {
        public int OfferId { get; set; }
        public int EnrolledSalonId { get; set; }
        public int? ShopLocationId { get; set; }
        public DateTime? OfferDate { get; set; }
        public string OfferType { get; set; }
        public string OfferDescription { get; set; }
        public DateTime? OfferValidUntil { get; set; }
        public DateTime? OfferBeginDate { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public EnrolledSalon EnrolledSalon { get; set; }
        public SalonLocation ShopLocation { get; set; }
    }
}
