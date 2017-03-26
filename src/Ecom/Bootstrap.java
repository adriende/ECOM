package Ecom;

import io.swagger.jaxrs.config.BeanConfig;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

public class Bootstrap extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	@Override
	public void init(ServletConfig config) throws ServletException {
		super.init(config);

		BeanConfig beanConfig = new BeanConfig();
		beanConfig.setVersion("1.0.0");
		beanConfig.setTitle("Ecom API");
		beanConfig.setDescription("The API for the ecom application.");
		beanConfig.setSchemes(new String[] { "http" });
		beanConfig.setHost("46.101.98.122:8080");
		beanConfig.setBasePath("/ECOM3/api");
		beanConfig.setResourcePackage("Ecom");
		beanConfig.setScan(true);
	}
}