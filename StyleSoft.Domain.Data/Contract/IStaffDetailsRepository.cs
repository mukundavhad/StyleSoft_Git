using System;
using System.Collections.Generic;
using System.Text;
using StyleSoft.Domain.Data.Models;
namespace StyleSoft.Domain.Data.Contract
{
       public interface IStaffDetailsRepository : IRepositoryBase<StaffDetails>
    {
        bool Authenticate();
        //IEnumerable<SalonLocation> SearchSaloonDetails(string searchString);

        //IEnumerable<SalonLocation> GetAllSaloonDetails();
    }
}
