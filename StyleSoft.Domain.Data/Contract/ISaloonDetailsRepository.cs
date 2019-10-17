using System;
using System.Collections.Generic;
using System.Text;
using StyleSoft.Domain.Data.Models;
namespace StyleSoft.Domain.Data.Contract
{
       public interface ISaloonDetailsRepository : IRepositoryBase<SalonLocation>
    {
        bool Authenticate();
        IEnumerable<SalonLocation> SearchShopLocation(string searchString);

        int GetSaloonNo();

        //IEnumerable<SalonLocation> GetAllSaloonDetails();
    }
}
