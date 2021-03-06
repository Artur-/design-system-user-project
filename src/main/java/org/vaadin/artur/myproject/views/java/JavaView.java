package org.vaadin.artur.myproject.views.java;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.charts.Chart;
import com.vaadin.flow.component.charts.model.ChartType;
import com.vaadin.flow.component.charts.model.ListSeries;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

import org.vaadin.artur.mydesignsystem.component.FillIndicator;
import org.vaadin.artur.mydesignsystem.component.MyButton;

@Route(value = "java")
@RouteAlias(value = "")
public class JavaView extends VerticalLayout {

    public JavaView() {
        add(new TextField("This is a default text field"));
        TextField fancy = new TextField("This is a class=fancy text field");
        fancy.addClassName("fancy");
        add(fancy);
        Span camera = new Span();
        camera.addClassNames("fas", "fa-camera");

        add(new Button("Standard button", camera, e -> Notification.show("Hello")));
        add(new Span("A Font Awesome icon loaded as an external SVG:"));
        Image svgImage = new Image("fa/svg/file-pdf.svg", "");
        svgImage.setWidth("64px");
        add(svgImage);
        add(new MyButton("My button", e -> Notification.show("Hello")));
        FillIndicator fill = new FillIndicator();
        fill.addClickListener(e -> {
            int newValue = fill.getValue() + 5;
            if (newValue > 100) {
                newValue = 0;
            }
            fill.setValue(newValue);
        });
        add(fill);

        Chart chart = new Chart(ChartType.LINE);
        chart.getConfiguration().addSeries(new ListSeries(1, 2, 3, 4, 5));
        chart.getConfiguration().addSeries(new ListSeries(6, 5, 4, 3, 2));
        chart.getConfiguration().addSeries(new ListSeries(3, 3, 3, 3, 3));
        add(chart);
    }

}
