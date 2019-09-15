using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Token
    {
        public int PkId { get; set; }
        public string SalonOwnerMobile { get; set; }
        public int? ShopLocationId { get; set; }
        public string CustomerMobile { get; set; }
        public string RelationType { get; set; }
        public DateTime? TokenDate { get; set; }
        public byte[] TokenTime { get; set; }
        public string TokenNumber { get; set; }
        public string TokenStatus { get; set; }
    }
}
