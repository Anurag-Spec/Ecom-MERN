import ProductsDAO from "../DAO/productsDAO.js";

export default class ProductsCtrl {
  static async apiGetProducts(req, res, next) {
    const productsPerPage = req.query.productsPerPage
      ? parseInt(req.query.productsPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.brand) {
      filters.brand = req.query.brand;
    } else if (req.query.Instock) {
      filters.Instock = req.query.Instock;
    } else if (req.query.name) {
      filters.name = req.query.name;
    }

    const { productsList, totalNumProducts } = await ProductsDAO.getProducts({
      filters,
      page,
      productsPerPage,
    });

    let response = {
      products: productsList,
      page: page,
      filters: filters,
      entries_per_page: productsPerPage,
      total_results: totalNumProducts,
    };
    res.json(response);
  }
}
