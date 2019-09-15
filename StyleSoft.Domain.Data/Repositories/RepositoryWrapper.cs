using System;
using System.Collections.Generic;
using System.Text;
using StyleSoft.Domain.Data.Contract;
using StyleSoft.Domain.Data.Models;

namespace StyleSoft.Domain.Data.Repositories
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private StylesoftContext _repoContext;

        public RepositoryWrapper(StylesoftContext repositoryContext)
        {
            _repoContext = repositoryContext;
        }

        private SaloonDetailsRepository _saloon;

        public ISaloonDetailsRepository Saloon
        {
            get
            {
                if (_saloon == null)
                {
                    _saloon = new SaloonDetailsRepository(_repoContext);
                }

                return _saloon;
            }
        }
    }
}
