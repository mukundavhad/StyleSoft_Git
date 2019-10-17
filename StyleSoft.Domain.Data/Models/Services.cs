using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Services
    {
        public Services()
        {
            Token = new HashSet<Token>();
        }

        public int ServicesId { get; set; }
        public int EnrolledSalonId { get; set; }
        
        public int? ShopLocationId { get; set; }
        public string ServiceName { get; set; }
        public string ServiceDescription { get; set; }
        public decimal? ServiceCost { get; set; }
        public string ServiceDuration { get; set; }
        public string Gender { get; set; }
        public decimal? CommissionPercentage { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public EnrolledSalon EnrolledSalon { get; set; }
        public SalonLocation ShopLocation { get; set; }
        public ICollection<Token> Token { get; set; }
    }
}
