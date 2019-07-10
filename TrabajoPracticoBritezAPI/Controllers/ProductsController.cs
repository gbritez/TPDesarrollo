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

        [HttpPost, Route("Products/Put")]
        public IHttpActionResult Put(ProductModel product)
        {
            productos newProduct = new productos();

            try
            {
                newProduct.nombre = product.Nombre;
                newProduct.marca = product.Marca;
                newProduct.precio = product.Precio;
                newProduct.descripcion = product.Descripcion;

                db.productos.Add(newProduct);
                db.SaveChanges();
                return Ok("Exito al ingresar producto");
            }
            catch (Exception)
            {

                return BadRequest("Fallo al ingresar producto, completar campos");
            }

          
        }

        [HttpGet, Route("Products/Delete/{id}")]
        public IHttpActionResult Delete (int id)
        {
            productos product = db.productos.Find(id);
            db.productos.Remove(product);
            db.SaveChanges();
            return Ok("Eliminado con éxito");
        }

        [HttpPost, Route("Products/Edit")]
        public IHttpActionResult Edit(ProductModel product)
        {
            productos productInDB = db.productos.Find(product.Id);
            productInDB.marca = product.Marca;
            productInDB.nombre = product.Nombre;
            productInDB.precio = product.Precio;
            productInDB.descripcion = product.Descripcion;
            db.SaveChanges();
            return Ok("Cambios guardados con éxito");
        }
    }
}
