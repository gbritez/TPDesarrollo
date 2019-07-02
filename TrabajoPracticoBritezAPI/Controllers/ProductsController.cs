using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TrabajoPracticoBritezAPI.Models;

namespace TrabajoPracticoBritezAPI.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductsController : ApiController
    {
        private TrabajoPacticoBritezDBEntities db = new TrabajoPacticoBritezDBEntities();

        [HttpGet, Route("Products/Get")]
        public ICollection<ProductModel> GetProductos()
        {
            List<ProductModel> results = new List<ProductModel>();
            var productos = db.productos;
            foreach(var item in productos)
            {
                ProductModel model = new ProductModel();
                model.Id = item.Id;
                model.Nombre = item.nombre;
                model.Marca = item.marca;
                model.Precio = item.precio;
                model.Descripcion = item.descripcion;
                results.Add(model);
            }
            return results;
        }
    }
}
