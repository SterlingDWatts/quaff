import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Module.css";

class Module extends Component {
  static defaultProps = {
    match: {
      params: {
        moduleId: -1,
      },
    },
  };
  renderModule = () => {
    return (
      <div>
        <header>
          <h1>Viticulture</h1>
        </header>
        <p>
          The study of grapegrowing, known as viticulture, has existed for
          thousands of years. It began in what is today Eastern Europe and
          migrated westward with various civilizations. Today, many grape
          species exist, but for winemaking, Vitis vinifera remains king. Over
          time, thousands of vinifera varieties have been documented, one of
          various factors that have increased demand for skilled growers,
          vineyard managers, and other experts.
        </p>
        <p>
          Viticulture is a complex topic, but sommeliers should understand the
          basics, as what happens in the vineyard has a significant impact on
          the resulting wine.
        </p>
        <h2>Planting Decisions</h2>
        <p>
          Central to viticulture is the decision of which grape variety, and
          which clone of that variety, to plant. Clones are identical genetic
          reproductions of a single vine that express different characteristics.
          They may result from natural mutations or intervention by a grower,
          who can take a cutting from a “mother” vine and plant it or graft it
          onto another vine.
        </p>
        <p>
          Aside from personal preference and the market, the decision of grape
          and clone is influenced by three key factors: location, climate, and
          soil.
        </p>
        <h3>Location</h3>
        <p>
          The importance of location has been demonstrated throughout history,
          even when scientific understanding was limited. Frankish King
          Charlemagne observed that snow melted first on a particular arc of
          southern slopes in Corton and ordered the planting of vines there in
          the late 700s. The Romans realized frost lifted last from valleys, so
          they decided to plant grapes on hillsides in modern-day Europe,
          leaving the valley floors for olives.
        </p>
        <p>
          Every aspect of location, from where in the world a vineyard is
          situated to the exact position of a vine, impacts the grapes.
        </p>
        <h3>Climate</h3>
        <h4>Temperature</h4>
        <p>
          Vinifera performs best in areas where the average annual temperature
          is between 50 and 68 degrees Fahrenheit, with an ideal temperature
          around 57 degrees. White grapes need an average of about 66 degrees
          during the summer season, whereas red grapes require closer to 70
          degrees. Nighttime temperatures must recede so vines can recuperate
          from the day’s work.
        </p>
        <p>
          Vinifera thrives between 30 and 50 degrees latitude, where these ideal
          temperatures exist. In locations very close to or far from the
          equator, vines will struggle. If temperatures exceed 90 degrees during
          the growing season, the development of anthocyanin (a pigment
          responsible for color) lessens, vines divert energy to shoots instead
          of clusters and roots, and fruit maturation is delayed or halted
          altogether. At the other extreme, in particularly cold locations,
          grapes cannot ripen.
        </p>
        <h4>Moisture</h4>
        <p>
          Though easier to overlook, moisture is an equally important
          consideration when it comes to climate. Grapes are sugar-rich fruits,
          after all. Moisture impacts not only the choice of which grape to
          plant but also decisions about vine training and canopy density.
          Moisture can lead to mold and mildew, especially with varieties that
          have tighter clusters or dense canopies, but it can also be harnessed
          to create coveted botrytis-influenced wines. Careful vine training and
          canopy management can encourage or mitigate moisture’s impact.
        </p>
        <h4>Sunlight</h4>
        <p>
          Sunlight plays a major role in the vine’s lifecycle. Required for
          photosynthesis, it provides both light and heat, which vary based on
          latitude and hillside exposure. Washington’s Columbia Valley, for
          example, receives nearly two more hours of sunlight per day than Napa
          Valley. In the coldest climates, growers typically plant vineyards
          near bodies of water that trap heat and reflect sunlight back to the
          grapes. Climates with excess exposure, however, can be prohibitive for
          grapegrowing. The right amount of sunlight is key.
        </p>
        <h4>A Closer Look</h4>
        <p>
          Climate is a very broad term, so it is useful to break the concept
          down further.
        </p>
        <p>
          <em>Macroclimate</em> is the climate of an overarching region (an
          appellation, for example) and is typically defined by factors such as
          average annual temperature, wind patterns, ocean currents, and annual
          rainfall.
        </p>
        <p>
          <em>Mesoclimate</em> zooms in to focus on the vineyard itself.
          Elevation, aspect, and shelter from the sun are key considerations.
          For example, vineyards with an east-facing exposure will receive more
          gentle morning sunlight and less intense afternoon sunlight than
          west-facing vineyards.
        </p>
        <p>
          <em>Microclimate</em> takes the closest look, considering the area
          within a vine’s canopy, which can vary greatly from one vine to
          another. The last few vines of a row reaching the apex of a steep hill
          may receive more sun exposure than nearby vines, and those closest to
          a body of water are most affected by humidity.
        </p>
        <h4>Best in Moderation</h4>
        <p>
          Rivers, lakes, and oceans impact nearby vineyards. The temperatures of
          large bodies of water are slow to change throughout the year, which
          affects the surrounding areas by moderating diurnal shift, or the
          difference between nighttime and daytime temperatures. The larger the
          body of water, the slower the temperature change of the water
        </p>
        <h3>Soil</h3>
        <p>
          Perhaps counterintuitively, vinifera typically thrives in
          nutrient-deficient soils that stress the vine. Fertile soils encourage
          vigorous growth, numerous clusters, and, ultimately, diluted grape
          flavors. Deficient soils force the vine to send roots deep in search
          of water and nutrients.
        </p>
        <p>
          Along with nutrient composition, the soil’s heat and water retention
          and drainage capabilities are primary considerations when planting
          vines. Heat retention and sun reflection can be important in cooler
          climates with shorter seasons, where a gradual, overnight warming
          effect is beneficial during cold off-hours. In a very hot and dry
          climate, however, water retention is a key factor, an asset to vines
          battered by the heat. Modern-day irrigation techniques mimic this
          effect. For grape varieties that naturally grow abundantly,
          well-drained soils, steep slopes, and nutrient deficiency are examples
          of natural strategies for inhibiting vigorous growth.
        </p>
        <p>
          The oft-cited term terroir is a subject of much debate, primarily
          around its precise meaning and the extent of its impact on wine. The
          term’s origin is the Latin terra, loosely defined as a stretch of land
          limited by its agricultural capacity. Today, terroir refers to natural
          influences such as location, climate, and soil, but some also argue
          for the inclusion of style and winemaking tradition.
        </p>
        <h2>Vine Anatomy</h2>
        <p>
          A grapevine is made up of four primary components: rootstock, trunk,
          cordon, and shoots and canes.
        </p>
        <h3>Rootstock</h3>
        <p>
          Growers may choose to plant vines on their own roots or to select
          specific rootstock onto which the vines can be grafted. The latter is
          the more common choice. The vine’s shoot system, or scion, is grafted
          onto a selected rootstock, which is chosen based on desired
          characteristics (such as vigor and pest resistance), relative to the
          vineyard site. The actual process of grafting is done by making a
          v-shaped incision in the top of the rootstock and the bottom of the
          scion. The scion is then inserted into the rootstock, and the two are
          tied together so that they fuse. Grafting is evidenced on grapevines
          by the appearance of a knot near the base of the vine.
        </p>
        <h3>Trunk</h3>
        <p>
          The central part of the vine is the trunk, which connects the
          rootstock to the cordon or cordons.
        </p>
        <h3>Cordons</h3>
        <p>
          Cordons are thick, permanent arms extending from the trunk of the
          vine. Vines can have no cordons or many, depending on the type of vine
          training employed.
        </p>
        <h3>Shoots & Canes</h3>
        <p>
          Shoots and canes are new growth extending from the trunk or cordon.
          The term shoots refers to stems, leaves, and tendrils that emerge in
          springtime. Technically, shoots can grow from buds at any location on
          the vine, including the trunk, where they’re known as suckers. Mature
          shoots are canes.
        </p>
        <p>
          Most growers will trim, or prune, shoots and canes each winter. If
          canes are not pruned, they will become cordons.
        </p>
        <Link to={`/test/${this.props.match.params.moduleId}`}>Test</Link>
      </div>
    );
  };

  render() {
    return <div className="Module">{this.renderModule()}</div>;
  }
}

export default Module;
