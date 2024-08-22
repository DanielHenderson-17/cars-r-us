import { PaintOptions } from "./Paints.js"
import { InteriorOptions } from "./Interiors.js"
import { WheelsOptions } from "./Wheels.js"
import { TechnologiesOptions } from "./Technologies.js"
import { SaveOrder } from "./SaveOrder.js"
import { OrderList } from "./Orders.js"

const container = document.querySelector("#container")

const render = async () => {
  const paintOptionsHTML = await PaintOptions()
  const interiorOptionsHTML = await InteriorOptions()
  const wheelsOptionsHTML = await WheelsOptions()
  const technologiesOptionsHTML = await TechnologiesOptions()
  const saveOrderHTML = await SaveOrder()
  const ordersHTML = await OrderList()

  const composedHTML = `
    <h1 class="ms-3 mt-4">Cars 'R Us: Personal Car Builder</h1>
    <div class="mt-5 w-75 mx-auto">
        <div class="row w-100">
            <section class="col-6">
                <div class="mx-auto card shadow col-8 p-3">
                    <h5 class="text-start">Paints</h5>
                    ${paintOptionsHTML}
                </div>
            </section>
            <section class="col-6">
                <div class="mx-auto card shadow col-8 p-3">
                    <h5 class="text-start">Interior</h5>
                    ${interiorOptionsHTML}
                </div>
            </section>
        </div>
        <div class="row w-100 mt-5">
            <section class="col-6">
                <div class="mx-auto card shadow col-8 p-3">
                    <h5 class="text-start">Wheels</h5>
                    ${wheelsOptionsHTML}
                </div>
            </section>
            <section class="col-6">
                <div class="mx-auto card shadow col-8 p-3">
                    <h5 class="text-start">Technologies</h5>
                    ${technologiesOptionsHTML}
                </div>
            </section>
        </div>        
    </div>
    ${saveOrderHTML}
    <h1 class="mt-5 ms-5">Custom Car Orders</h1>
    <div>
    ${ordersHTML}
    </div>
`;

  container.innerHTML = composedHTML
};


document.addEventListener("newOrderCreated", render)

render()
