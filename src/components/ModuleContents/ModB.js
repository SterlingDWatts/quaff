import React from "react";
import { Link } from "react-router-dom";

export default function ModB({ classname, ...props }) {
  return (
    <>
      <header>
        <h1>Climate v. Weather</h1>
      </header>
      <img
        src="https://i.imgur.com/wVjNuTY.jpg"
        alt="Colorado mountaintop with clouds"
      />
      <h2>Climate</h2>
      <p>
        Climate describes the weather conditions that can be expected in a year,
        while weather is measure of what is happening at a given moment or year.
        Weather can vary wildly from what we expect in a given climate. This
        leads to vintage variation and can cause things such as surprisingly
        ripe flavors from a wine that was made in a cool climate. It could also
        result in a disappointingly diluted wine from a region that is normally
        dry. Some areas are known for having large swings in their weather from
        year to year with lots of vintage variation, while other places have
        little change and relatively consistent wine.
      </p>
      <p>
        There are many different ways to describe climate in viticulture. The
        most obvious is the overall temperature. Is the area a warm or a cool
        area? Climates are also grouped into types based on common climate
        patterns such as Mediterranean Climate or Maritime Climate. Size can
        also be used to describe climates. Some climate may describe an entire
        large region, while others might simply describe the canopy of an
        individual vine.
      </p>
      <p>
        Climate types can also be combined to further classify regions in terms
        of their characteristics. A region like Champagne is known for having a
        cool continental climate, while Bordeaux is known for a moderate
        maritime climate. Understanding these climates and how they affect not
        only the grapes and the grape growing process is important to
        understanding the types of wine that comes from these places.
      </p>
      <h3>Temperature</h3>
      <p>
        One way to categorize climates is via temperature. There are four
        general classifications for temperature: cool, moderate, warm, and hot.
        View the module on <Link to="/learn/1">Vine Needs</Link> to brush up on
        how warmth affects the vine.{" "}
        <em>
          These classifications are defined by the average temperature during
          just the growing season.
        </em>
      </p>
      <h4>Cool Climate</h4>
      <p>Cool climates are generally below 61.5°F.</p>
      <h4>Moderate Climate</h4>
      <p>Moderate Climates are between 61.5°F and 65.5°F.</p>
      <h4>Warm Climate</h4>
      <p>Warm Climates are between 65.5°F and 70°F.</p>
      <h4>Hot Climate</h4>
      <p>
        Hot climates are above 70°F and are generally considered too hot for
        fine wine making.
      </p>
      <h3>Continentality, Sunlight, & Rainfall</h3>
      <p>
        Climates can also be characterized in large regions by traits such as
        length of season, when rain falls, and temperature swings. These
        characteristics are based on geographical features such as proximity to
        large bodies of water.
      </p>
      <h4>Mediterranean Climate</h4>
      <p>
        A Mediterranean Climate, as can be found in much of coastal California
        (and obviously the Mediterranean), has low temperature differences
        between the warmest and coolest months of the year. Summers tend to be
        warm and dry in these regions which gives the grapes extra warmth and
        light with which to ripen.
      </p>
      <h4>Maritime Climate</h4>
      <p>
        A Maritime Climate has a fairly even spread of rainfall throughout the
        year. The rain can cause issues if it occurs during fruit set,
        flowering, or near harvest. The climate tends to be cool to moderate
        with a relatively low difference between the coolest and warmest months.
        Growing seasons can be pretty long in these regions due to temperatures
        not dropping quickly.
      </p>
      <h4>Continental Climate</h4>
      <p>
        A Continental Climate generally has larger temperature swings between
        the coolest and warmest months (often due to a lack of proximity to a
        large body of water to moderate the temperature). Summer and the growing
        season are much shorter due to the temperature differences. This type of
        climate is commonly dry summer.
      </p>
      <h3>Specificity</h3>
      <p>
        Finally, we can classify climates in terms of specificity. Large areas
        are a way to describe what we should expect as the average in a region.
        However, a smaller area within that region may have mitigating factors
        that make it different from the others. For example, an area known for
        the cooling (and reduction in light) from ocean fog, may have an area
        within that sits above the fog line and get plenty of warmth and
        sunlight.
      </p>
      <h4>Macroclimate</h4>
      <p>
        Describes the climate of a large region (such as an AVA or appellation).
        It often describes things like average annual temperature, wind
        patterns, ocean currents, and rainfall.
      </p>
      <h4>Mesoclimate</h4>
      <p>
        Describes the climate of the actual vineyard. Elevation, aspect, and
        shelter from the sun are key considerations.
      </p>
      <h4>Microclimate</h4>
      <p>
        Describes the area within a vine’s canopy. This can be much more
        different from vine to vine than some would think. For example, a vine
        at the end of the row could be near large trees causing shade, or a vine
        at the top of a slope could be above the average fog-line.
      </p>
    </>
  );
}
