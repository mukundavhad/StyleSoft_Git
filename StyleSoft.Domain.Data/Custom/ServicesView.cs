using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class ServicesView
    {
        public ServicesView()
        {
          
        }

        public int ServicesId { get; set; }
        public int EnrolledSalonId { get; set; }
        public string OwnerName { get; set; }
        public string ShopName { get; set; }
        public string CategoryName { get; set; }
        public int? ShopLocationId { get; set; }
        public int CategoryId { get; set; }
        public string ServiceName { get; set; }
        public string ServiceDescription { get; set; }
        public decimal? ServiceCost { get; set; }
        public string ServiceDuration { get; set; }
        public string Gender { get; set; }
        public decimal? CommissionPercentage { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public ServiceCategory Category { get; set; }
        public EnrolledSalon EnrolledSalon { get; set; }
        public SalonLocation ShopLocation { get; set; }
        public ICollection<Appointment> Appointment { get; set; }
        public ICollection<Token> Token { get; set; }
    }
}
