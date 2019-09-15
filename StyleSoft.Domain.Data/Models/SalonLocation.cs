using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class SalonLocation
    {
        public int PkId { get; set; }
        public string SalonOwnerMobile { get; set; }
        public int? ShopLocationId { get; set; }
        public DateTime? EnrolmentDate { get; set; }
        public string ShopName { get; set; }
        public string ShopAddress1 { get; set; }
        public string ShopAddress2 { get; set; }
        public string Locality { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PinCode { get; set; }
        public decimal? Cgst { get; set; }
        public decimal? Sgst { get; set; }
    }
}
