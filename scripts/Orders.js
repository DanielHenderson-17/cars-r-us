export const OrderList = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=colors&_expand=interiors&_expand=wheels&_expand=technologies");
    const orders = await fetchResponse.json();

    let ordersHTML = orders.map((order) => {
        const orderPrice = order.colors.price + order.interiors.price + order.wheels.price + order.technologies.price;
        const orderDescription = `${order.colors.color} car with ${order.wheels.type} wheels, ${order.interiors.type} interior, and the ${order.technologies.type} package for a total cost of $${orderPrice.toFixed(2)}`;

        return `<div class="p-3 order ms-5 w-75 my-2">${orderDescription}</div>`;
    }).join("");

    return ordersHTML;
};
