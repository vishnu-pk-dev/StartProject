import { url } from "inspector";
import Image from "next/image";
import houseLocked from "../../../public/home-locked.svg";
import wifi from "../../../public/wifi.svg";
import HouzKEY from "../../../public/houzkey.svg";
import TV from "../../../public/TV.svg";
import interiorDesign from "../../../public/interiorDesign.svg";
import sofa from "../../../public/Couch.svg";

import Background1 from "../../../public/Frame-1.png";
import Background2 from "../../../public/Frame-2.png";
import Background3 from "../../../public/Frame-3.png";
import Background4 from "../../../public/Frame-4.png";
import Background5 from "../../../public/Frame-5.png";

export const Objects = {
  cardOptions: [
    {
      Id: 1,
      wHeaderTitle: "Home Insurance",
      svgUrl: houseLocked,
      wFooterText: "Unlock offers now",
      bgImage: Background1.src,
      bgHeaderTitle: "RM 983",
      bgFooterText: "Sofa bed seater",
    },
    {
      Id: 2,
      wHeaderTitle: "Broadband",
      svgUrl: wifi,
      wFooterText: "Claim rewards on broadband plans",
      bgImage: Background2.src,
      bgHeaderTitle: "RM 450",
      bgFooterText: "Mini Wireless Smart Speaker",
    },
    {
      Id: 3,
      wHeaderTitle: "#HouzKEY",
      svgUrl: HouzKEY,
      wFooterText: "Get rewards on your properties",
      bgImage: Background3.src,
      bgHeaderTitle: "RM 950,000",
      bgFooterText: "The Valley Residences",
    },
    {
      Id: 4,
      wHeaderTitle: "Home Appliances",
      svgUrl: TV,
      wFooterText: "Best offers for home appliances",
      bgImage: Background4.src,
      bgHeaderTitle: "RM 950,000",
      bgFooterText: "The Valley Residences",
    },
    {
      Id: 5,
      wHeaderTitle: "Interior Design",
      svgUrl: interiorDesign,
      wFooterText: "Exclusive deals on interior design",
      bgImage: Background5.src,
      bgHeaderTitle: "RM 450",
      bgFooterText: "Mini Wireless Smart Speaker",
    },
    {
      Id: 6,
      wHeaderTitle: "Furnitures",
      svgUrl: sofa,
      wFooterText: "Best deals for furnitures",
      //   bgImage: Background3.src,
      //   bgHeaderTitle: "RM 950,000",
      //   bgFooterText: "The Valley Residences",
    },
  ],
};

export default function SlidingCards() {
  return (
    <div className="sliding-cards">
      <div className="sliding-cards-top slider">
        {Objects.cardOptions && Objects.cardOptions.length > 0
          ? Objects.cardOptions.map((post) => (
              <div className="felx" key={post.Id}>
                <div className="white-card card">
                  <Image
                    className="card-ico"
                    src={post.svgUrl}
                    alt="card-ico"
                  />
                  <div className="card-text">
                    <h2>{post.wHeaderTitle}</h2>
                    <p>{post.wFooterText}</p>
                  </div>
                </div>
                {post?.bgHeaderTitle && (
                  <div
                    className="bg-card card"
                    style={{
                      backgroundImage: `url(${post.bgImage})`,
                    }}
                  >
                    <div className="card-text">
                      <h2>
                        From <span>{post.bgHeaderTitle}</span>
                      </h2>
                      <p>{post.bgFooterText}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          : null}

        {Objects.cardOptions && Objects.cardOptions.length > 0
          ? Objects.cardOptions.map((post) => (
              <div className="felx" key={post.Id}>
                <div className="white-card card">
                  <Image
                    className="card-ico"
                    src={post.svgUrl}
                    alt="card-ico"
                  />
                  <div className="card-text">
                    <h2>{post.wHeaderTitle}</h2>
                    <p>{post.wFooterText}</p>
                  </div>
                </div>
                {post?.bgHeaderTitle && (
                  <div
                    className="bg-card card"
                    style={{
                      backgroundImage: `url(${post.bgImage})`,
                    }}
                  >
                    <div className="card-text">
                      <h2>
                        From <span>{post.bgHeaderTitle}</span>
                      </h2>
                      <p>{post.bgFooterText}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          : null}
      </div>

      <div className="sliding-cards-bottom slider">
        {Objects.cardOptions && Objects.cardOptions.length > 0
          ? Objects.cardOptions.map((post) => (
              <div className="felx" key={post.Id}>
                <div className="white-card card">
                  <Image
                    className="card-ico"
                    src={post.svgUrl}
                    alt="card-ico"
                  />
                  <h2>{post.wHeaderTitle}</h2>
                  <p>{post.wFooterText}</p>
                </div>
                {post?.bgHeaderTitle && (
                  <div
                    className="bg-card card"
                    style={{
                      backgroundImage: `url(${post.bgImage})`,
                    }}
                  >
                    <h2>
                      From <span>{post.bgHeaderTitle}</span>
                    </h2>
                    <p>{post.bgFooterText}</p>
                  </div>
                )}
              </div>
            ))
          : null}

        {Objects.cardOptions && Objects.cardOptions.length > 0
          ? Objects.cardOptions.map((post) => (
              <div className="felx" key={post.Id}>
                <div className="white-card card">
                  <Image
                    className="card-ico"
                    src={post.svgUrl}
                    alt="card-ico"
                  />
                  <h2>{post.wHeaderTitle}</h2>
                  <p>{post.wFooterText}</p>
                </div>
                {post?.bgHeaderTitle && (
                  <div
                    className="bg-card card"
                    style={{
                      backgroundImage: `url(${post.bgImage})`,
                    }}
                  >
                    <h2>
                      From <span>{post.bgHeaderTitle}</span>
                    </h2>
                    <p>{post.bgFooterText}</p>
                  </div>
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
