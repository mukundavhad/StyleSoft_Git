using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class StaffDetailsView
    {
        public StaffDetailsView()
        {
        }

        public int StaffId { get; set; }
        public int AddressId { get; set; }
        public string Address1 { get; set; }
        public string SalonOwnerMobile { get; set; }
        public int? ShopLocationId { get; set; }
        public string ShopName { get; set; }
        public string StaffMobileNumber { get; set; }
        public string StaffName { get; set; }
        public string CurrentlyWorkingInd { get; set; }
        public decimal? CommissionPercentage { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public SalonLocation ShopLocation { get; set; }
        public Address Address { get; set; }
        public ICollection<Token> Token { get; set; }
    }
}
