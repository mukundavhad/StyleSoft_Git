using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class StaffDetails
    {
        public StaffDetails()
        {
            Token = new HashSet<Token>();
        }

        public int StaffId { get; set; }
        public int AddressId { get; set; }
        public string SalonOwnerMobile { get; set; }
        public int? ShopLocationId { get; set; }
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
