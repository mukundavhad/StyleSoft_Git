using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Services
    {
        public int SrNo { get; set; }
        public string SalonOwnerMobile { get; set; }
        public int? ShopLocationId { get; set; }
        public string ServiceId { get; set; }
        public string ServiceName { get; set; }
        public string ServiceDescription { get; set; }
        public decimal? ServiceCost { get; set; }
        public byte[] ServiceDuration { get; set; }
        public decimal? CommissionPercentage { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
