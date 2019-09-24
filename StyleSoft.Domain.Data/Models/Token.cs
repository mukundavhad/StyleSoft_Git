using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Token
    {
        public int TokenId { get; set; }
        public int EnrolledSalonId { get; set; }
        public int? ShopLocationId { get; set; }
        public string CustomerMobile { get; set; }
        public string RelationType { get; set; }
        public DateTime? TokenDate { get; set; }
        public byte[] TokenTime { get; set; }
        public string TokenNumber { get; set; }
        public string TokenStatus { get; set; }
        public int? ServiceId { get; set; }
        public int? StaffId { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public EnrolledSalon EnrolledSalon { get; set; }
        public Services Service { get; set; }
        public SalonLocation ShopLocation { get; set; }
        public StaffDetails Staff { get; set; }
    }
}
