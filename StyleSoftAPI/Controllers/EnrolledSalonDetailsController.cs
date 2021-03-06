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
    [Route("api/EnrolledSalonDetails/")]
    public class EnrolledSalonDetailsController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public EnrolledSalonDetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public int GetEnrolledSalonNo()
        {
            try
            {
                int enrolledsalonno = this._repoWrapper.EnrolledSalon.GetEnrolledSalonNo();
                return enrolledsalonno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<EnrolledSalon> GetAll()
        {
            var EnrolledSalondetails = this._repoWrapper.EnrolledSalon.FindAll().ToList();
            return EnrolledSalondetails;
        }

        [HttpPost("SearchOwnerName")]
        public IEnumerable<EnrolledSalon> SearchOwnerName([FromBody]string searchString)
        {
            var EnrolledSalon1 = this._repoWrapper.EnrolledSalon.SearchOwnerName(searchString).ToList();
            return EnrolledSalon1;
        }

        [HttpPost("GetByID")]
        public EnrolledSalon GetByID([FromBody] int EnrolledSalonId)
        {
            var enrolledSalon1 = this._repoWrapper.EnrolledSalon.FindByCondition(x => x.EnrolledSalonId == EnrolledSalonId).FirstOrDefault();
            return enrolledSalon1;
        }


        [HttpPost("Add")]
        public bool Add([FromBody] EnrolledSalon enrolledsalon)
        {
            try
            {
                this._repoWrapper.EnrolledSalon.Create(enrolledsalon);
                this._repoWrapper.EnrolledSalon.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Update")]
        public bool Update([FromBody] EnrolledSalon enrolledsalon)
        {
            try
            {
                this._repoWrapper.EnrolledSalon.Update(enrolledsalon);
                this._repoWrapper.EnrolledSalon.Save();
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
