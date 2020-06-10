package org.vaadin.artur.myproject.views.java;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

import org.vaadin.artur.mydesignsystem.component.FillIndicator;
import org.vaadin.artur.mydesignsystem.component.MyButton;

@Route(value = "java")
@RouteAlias(value = "")
public class JavaView extends Div {

    public JavaView() {
        add(new Button("Standard button", e -> Notification.show("Hello")));
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
    }

}
