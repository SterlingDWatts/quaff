import React from "react";
import Quintessa from "./mod-one-header.jpg";

export default function ModA({ classname, ...props }) {
  return (
    <>
      <header>
        <h1>Vine Needs</h1>
      </header>
      <img src={Quintessa} alt="Quintessa vineyards" />
      <p>
        Wine starts in the vineyard. Great wine cannot be made without great
        grapes. There are several factors that affect the quality of the grapes.
        These factors can best be understood by first knowing what the vine
        needs to produce grapes. In order to produce a crop, the vine needs
        sunlight, carbon dioxide, water, warmth, and nutrients. The correct
        amount of each of these matters as well. If there is too much water, the
        grapes may swell up and create a watery, uninteresting wine.
      </p>
      <h2>Sunlight</h2>
      <p>
        The sun is the energy source that powers the vine to produce grapes.
        This energy is used to convert water and carbon dioxide molecules into
        sugar molecules (and oxygen as byproduct). This is the basic equation
        for photosynthesis and is the main building block for the vine and it’s
        grapes. The full equation is 6CO<sub>2</sub> + 6H<sub>2</sub>O -->
        sunlight and warmth --> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O2.
        This sugar is later converted into alcohol by yeast. Without enough
        sunlight, grapes are not able to fully ripen. Grapes that are grown
        further away from the equator generally must be grown in special
        locations to aid in getting extra light. Vines can be planted on steep
        slopes facing the equator to maximize sunlight. Vines can also be grown
        be large bodies of water that reflect towards the vines for additional
        light. Even with these mitigating factors, there is a limit to how far
        north vines can be planted to produce fine wine.
      </p>
      <h2>Water</h2>
      <p>
        Water is part of the essential equation needed to produce sugars in the
        grape that are later turned into alcohol. Limited quantities of water
        are desired, and at the right time. Too much water can cause grapes to
        simply swell up with water and produce uninteresting wines. Vineyard
        location and soil type can mitigate this. In areas with plenty of rain,
        vines can be planted in the middle or top of slopes so that excess rain
        runs off into the valleys. Soils with larger particles drain better and
        retain less water. Conversely, a soil with small particles, such as
        clay, could be a great place to plant vines in an area where it
        otherwise would not rain enough.
      </p>
      <h2>Warmth</h2>
      <p>
        As an area warms up, a vine's metabolic processes speed up causing it to
        accumulate more sugar and retain less acid. In an area where it is too
        warm, grapes can lose too much acidity before they fully ripen. If it is
        too cool, the vine may not be able to fully ripen the grapes. Grapes
        from warmer regions generally produce fuller body wines (due to higher
        alcohol) with less acid. This is one of the main reasons why wine is
        only produced in two bands on either side of the equator. There are some
        areas that can stretch outside of those bands due to mitigating factors,
        such as being close to large bodies of water that can help to regulate
        the temperature. Large diurnal shift (swing in temperature from day to
        night) can help an area that otherwise would be too warm.
      </p>
      <p>
        In addition, different grapes do well in different climates. Some crave
        warmth and would otherwise not ripen, while others love the cool. Some
        grapes even perform well in a multitude of climates!
      </p>
      <h2>Nutrients</h2>
      <p>
        While most everything in the vine is made is made of glucose, vines do
        need nutrients to produce grapes. To produce fine wine, limited
        quantities of nutrients are desired. Too many nutrients will lead to an
        overly vigorous vine with uninteresting fruit.
      </p>
    </>
  );
}
