using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StyleSoft.Domain.Data.Contract;
using StyleSoft.Domain.Data.Models;
using Microsoft.AspNetCore.Authorization;
namespace StyleSoftAPI.Controllers
{
    //[Authorize][Produces("application/json")]
    [Produces("application/json")]
    [Route("api/SaloonDetails/")]
    public class SaloonDetailsController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public SaloonDetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public int GetSaloonNo()
        {
            try
            {
                int salonno = this._repoWrapper.Saloon.GetSaloonNo();
                return salonno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<SalonLocation> GetAll()
        {
            var Salondetails = this._repoWrapper.Saloon.FindAll().ToList();
            return Salondetails;
        }

        [HttpPost("SearchShopLocation")]
        public IEnumerable<SalonLocation> SearchShopLocation([FromBody] string searchString)
        {
            var SalonLocation = this._repoWrapper.Saloon.SearchShopLocation(searchString).ToList();
            return SalonLocation;
        }

        [HttpPost("GetByID")]
        public SalonLocation GetByID([FromBody] int shopLocationId)
        {
            var shopLocation = this._repoWrapper.Saloon.FindByCondition(x => x.ShopLocationId == shopLocationId).FirstOrDefault();
            return shopLocation;
        }
        [HttpPost("Add")]
        public bool Add([FromBody] SalonLocation saloon)
        {
            try
            {
                this._repoWrapper.Saloon.Create(saloon);
                this._repoWrapper.Saloon.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Update")]
        public bool Update([FromBody] SalonLocation salon)
        {
            try
            {
                this._repoWrapper.Saloon.Update(salon);
                this._repoWrapper.Saloon.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        //[HttpPost("Delete")]
        //public bool Delete([FromBody] TblCustomerMaster customer)
        //{
        //    try
        //    {
        //        this._repoWrapper.Customer.Delete(customer);
        //        this._repoWrapper.Customer.Save();
        //        return true;
        //    }

        //    catch (Exception e)
        //    {
        //        return false;
        //    }


        //}



    }
}
