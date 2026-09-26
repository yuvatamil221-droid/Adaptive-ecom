import Product from "../components/product";
import products from "../data/products";

function PremiumHome({ navigate }) {
  // Only Premium New Arrival products
  const premiumProducts = products
    .filter(
      (product) =>
        product.newArrival === true && product.id >= 71 && product.id <= 130,
    )
    .slice(0, 8);

  const premiumCategories = [
    {
      name: "Luxury Electronics",
      description: "Premium technology for your lifestyle",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      filter: "electronics",
    },
    {
      name: "Premium Fashion",
      description: "Refined styles and modern essentials",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      filter: "fashion",
    },
    {
      name: "Beauty Collection",
      description: "Elevated beauty and self-care",
      image:
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
      filter: "beauty",
    },
  ];

  const logos = {
    Apple: "https://cdn.simpleicons.org/apple/000000",
    Samsung: "https://cdn.simpleicons.org/samsung/1428A0",
    Sony: "https://cdn.simpleicons.org/sony/000000",
    Nike: "https://cdn.simpleicons.org/nike/000000",
    Canon:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAACUCAMAAAC+0owFAAAAZlBMVEX///8AAAD09PTExMRtbW36+vrj4+NkZGTp6ekJCQl7e3sYGBiVlZV4eHj39/fm5uYgICDZ2dmOjo6wsLDPz8+np6ebm5tNTU1fX18pKSk6Ojq7u7svLy+CgoI/Pz81NTVVVVVGRka22x5MAAAIc0lEQVR4nO2baZOrKhCGFVzIpsEti+Mk/v8/eeMKNE0ymjmTqlv9fDmnDErz2jTdyHgeQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE8YskTBR5FreXzYPjNW5KHgkWftqsTyBkvf3yLTZxJaPk08b9LazIA1uJibYq0k9b+Hcwnl3cWvTEZfRpK/+I+nB8oUXHuWKfNvQPkIHDL76bsi4453l2H/2j/rSt/5zqG5eilOm4moRMyPzUXfxqPmzsPybEY+eNJ2BdTWTvIOf/czRNz5gWmxxtzLsZ1RZ/bOLfEaFiXB3p1n4zuI37eSGT1TaOszx1B9yQ5dv4UEawk0SWQdzwJ5E6YTLPDnG83ecRe5YBJVF5iJvcShtZkcXBXjq6iGJEi93B0YccA8y3wztCUQx6ddy5QBuxKBtbNMaKLfgYqS85Ps4kqg1rA546XpqQU8NSH3eY1uNqgbs322Ji7PE+PDZHmJPEbCjyu/GgGGklimbWy/9WDaJac9IGe3dFZS18l0oieqRci4TB/EpCWd7UdSwSVIgYfuZywVzlJAFsk8j6sINPOsIpJertRm/wPT5GAh0ra5BR2d14a6pq32oNrxV0wCg33X1UNiyqq3HdThUKTIyta95GusUZMKE5Yc+6GH2KMtiABv1jiuoOLm+gV/Hec068U6kwHDownF5WMA4OJtTZFVz/toaJ5RlnV/qd7PVmN/VDWDdnyy1GrspWUSEx6hh6RYYIaYod5n0tOYUrcxlsldPLBsr6oAm9urFr0V0Jxlci5l/wpbXrSh+xKllkc0bK3pnt6MkiO0G/6G3aH9DU76hPlbAcpuh2ulCbbavRkqDFHtVmAWpgAMaHlSaxSwymvZBgCl5RdsXGqMMHQ13O47quq5EPfahpJ023718zvzss2Tiug5FirvHlzKzyuY1KN8L0gTBJwYvoo1gUjc1Y7UPuheD2e9HUmKKbsk2ApfDCH+v21EVysB7WSGEPFqgB40pvmtM1Zr0qV5MRMHV3ZkDksMc9dpOuRjpdOqpJnIPWrR7srKyhVzFtn6pRIHXrxlmijhHwK365BwYtNb0NqnEer7vVUDFWzXQOJ9hB8yWoxrhcw55NNTJkPh1dG6DDo47xk5x8QoBn7g39oE1TSQwXxtkQbWqd50XRqif0pRyqMf4kwT2mGlhOfvZwWO9H5/xHu8UgCLTGwg7U2Ex5LxzC1FOoeYEqCMIMNPcPKgsDj9qNbxAWIYYaAlmafbgGT3SdX3+6EQijmHGbSw1406SGHv02KmRZQVGb42vUKLB1His/vKGQz7CSAG8NHlo/+fGlGkZmpnaauLUEqNpmjRo1lpLgIZLF/t1VBCMk4KFGmrNQDTPUx7ObCWueH+c3uUaNEsu98OFVm/qpFoJX2faQldPOBHxvb6jRGBe/lJs1PmQO8P9WjcKqE3VYttsN6d5mt2vLbhR78FQ9cCxUA4xAxbXSSmLn0vsf+8YTIisWP0rgCFzS87VlaghQ0KngIFvY8X16Z6vUwCqEhVowa6Hr4AJkMu1qNQow6bRdJmsHc/eOGmgUXfb1WWIpy4MtvL5aDctIlf3Zu3Yp/sv6FXbRp8UC3eDB0JLzZWpY01kFjtqa6ZPxa9RIsezLubmBENli3JuswfbgtS9Sb6qhtjnFDfw0J0tr1EAzc7gD8gxr2AGXLGERtxe/66+pobIKz3oZ7/gGsmI/ip+fiwFLVb+cXhuzfjqqz3PL1MitOlsFDriOvxU3vBqp6Hc/qFFH4FvTt7mhHDs1A5epwa3poCpi+atq4HvEPxUDFiMnPUNj0O9i130v1ECyCpUVg1+u76yw+MeUm6Nus4BRx9zTKUDGcZodZ5kaoR2T1aQDv81fPtapkWD5l+ujIwS4cGuuzQIMTm2lLszM7fMDqlQB83GejevU8LBM8vqzyMGAGgezlAlBiFM7EwvVyK2sQr0usMn2Vg3b2Yyd6ImflWijGcITIEnMQJELZ+G8dC9UA6r+GJyK1sZ0VHavVMOzt/ORgVmEZRUyoAb4XAl9Qx2BWbrbY38OUHPSiNVq2VqrBjpXjuWLaoXfzhGMG6fncUPtTCxVA+456xWx/hlZq+dWq2FvIXWWP8/PHwXOV2F9AAFrijUHpzEsVcOuzr6V9ahG69VAFnRffdhEqW99pgW3aY0jDKG9eE9TabEazIfM3TD1SvTDaOvVQLK9zkZ3EpY9luVtZyq8R98LRk5C3OVKNeyvc/OcCOdXYpyMeEMNvLL3j/j3WNE1HipSq0xQBvVi3EA2k69Vw/p2kpkddcxf799Vw3Eo0D9LuIEepl0Qv0zTyMrdApaEXpgkvfU5dLpyrRraAauBo6WGObC31PDCLX6SOOaRmD95sXQ4UnOas7PIvutc5VVv+iZjCai4x/xshRpeao7jOK1fU3gC8/o9NR6REXcPfxeUvOjg+fCXGlc9r0BDjj+KYVUy43mDNWp40cFItKapEg1JD9yUeVcNT1jHpXSLp/9ctkbaHnLHVuCx7CZZCSq3er0aD/v0eXmp+0mc9vfcrBOMb6vRnblzbPnOfGUcRhJpZ4p+twc2/AhKjGFnYp0aD+X113XJalkMBiOnBn5BjUdrnj05wBXkBZKxi9raXb3X09IP1DiliBqz18Ni1T4imeuL3+XUdv+0OXLoHQo7qQHc/9VWDouKrEWU2AW5dNVyotA73225Mq8KDIaPqMXZvDjlvWVsXL8j1UEEpXccJgb9BmN+IvZGF3GG3ApImJBlc56Xi+9gX7/4K7/ujzWa4H6Pm4dmRkbKTNCL05MTrLHVVVo34+tqm1o4ykv4qEVdEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEC/5D3tpcIkPG+GXAAAAAElFTkSuQmCC",
    boAt: "https://cdn.simpleicons.org/boat/000000",
    Fossil:
      "data:image/jpeg;base64,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",
    Milton:
      "data:image/png;base64,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",
    Anker:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACUCAMAAADS8YkpAAAAYFBMVEX///8Ap+EApOAAot8Ant7h8PoAoN/G6vel2vLt+f00tOZUwOim3PJSvemw3vO55fYPrONjwOnM6fff8/r1/P6Ey+2X1vGAzu7U7/l0x+vm9fuN0e9GuedFvOd7xutYuueRGcG8AAAFSElEQVR4nO2Z23akKhBABXq8xWtLt5c2k///y4EqVBDUzlNy1qn9lIWi26IooBNFBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ/zPk1GWB1j+IdFozaMPb4c8pClzH1ulPiCx0aXLfcko2MjYPXnN6A8TTaS1i3QhtWaP//HI+dSqhUww3fN5C/NVdc7dNNG0VCFkQ2QvOxNe0b0850/AmsVsraCzAN1d38NZ5zws68R7C9SGYD3/oriXftXLW3t/zHfRrGU8PfJnI7bECX37kWzXwrBk//hu+EJi3hFV44W4vwIsvE6MlfOrbcdDl5lFBX3Hkq4S7N3yHxnQtjnwZs2J/5pu1KLhkPPpy4RD/3Xy3S9wLzBG90eL57ubNl+fbSJ34SpO8j+VB4Ns8K5f74svn1DQVLxPv+lJ3YotWXIV8+e5bTnxxKlqJhb7eRAZfobtuEZJPyKT+MsB9vEZxdisK+s4mha99MbF4s1VG7RtOSoyvM1Vb3VKGPs6ma6zEdwOMvoXJySW7D31lCTcKaxpc+trRLHRLfjXjXlh/RrBwSyn48tqUu3y48DXJa0+ZM1+xf18h3IkSBGVY3eV+gI1vVDcgYobqyHdJXlvhW/GFfMj9ZdbhpcdQlBLT2P3gxRdvWlL4wHdJXic+F77C9i0wKOf5MEF4dWGYmFdPVl8541DXx77yEwuoOwMW3y5ZMfHLZqhntWmti7HxsinAU6zFasQsDfmaSYmDFfbFNVK07uOxnnXRc6vkRigr3aWPcz9ePnbW4oDerL3N5qu2BagzHfia5C2zqLMDtMQ35BtYj90ECYUXjEx9f0AqWwNi+UpMYd6HfU0JUcl7/7QTePVlb/le7R+62d6Y3SGG1ubR8rVSOOBrKq96kMydlPhefPnVagyfva5qEjYSVsbbvsv8z7uAr0neHhZLe1XfxVcl6VH+wrMvdLE4mCmdqVHdBdjxXVK0fXq+BV6ZZZTCa7clda0PdVXXuLExT8f6mxeppsfa4J5jfIqtOKgaq+b+iBkc9pVmH5fvfFmOb1PfOWF+9Z6vj7NeZC30a8/3DhJGOE5N9KYIA8zZssS4vk7K2b6mJV33k9sIvbseJ/iI16lvCitaDl3UXFtrsPgI+0Yd44e+AoI6wSfpsnbt66zHMAO2SIXA7MWTQ1bGDWpD2xD2xSUz6CtmfHMinEC97avqin5KeeKb4pyEh/UcFzY52ptmz1c+RNiXs6Xq4ubTPr+9t9+psV8VuBUxcwPmpNp5miRIsETcw75qvEU4vuueF1eOZdVB35PzxXaUGsUWvhAmvLrDXb3DVAXsBifYkO96NnV9twPbmjPV6sua6u7SRYH95JDvn+QgMQ7Ptes4JImSH25Qm4YD3/U3FNvXOUeZ2oRr/MXvD87+97mrLS4VhL/RLxpRoWEQ7Fmssz3kiwNg1nD03ZIXAwVVBKfcxe8Pjq+c7eVgh3mTDm9hzpvmZyfcRfDswDfKvvg+vrsfhl5Ym5KL+HrnIfzQOFiEC75md5VWPdteiyUi7o981ZTUzThsuhp4R3DYimOFex7Hd/bOQ+YAGPpRappvseJlbk/UjfGyz6m5unLTGZzqm27eJqQW8bJmD83t5p5R1yfE+ifM6UPEHsvvk+qv0unb5XD5y3tglOEpZLmgor0dLOQA19R8mZybrK9N1qqT3Qc/38wT9BXzpwv0HqzD0SqcHLxxR8ovz6W/CpU4xwvL70OO8eOnHb6DbMtv/PPg58nG/1Ly6kn80wYEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDEr+Yf00RN3+dNx8gAAAAASUVORK5CYII=",
    Logitech: "https://cdn.simpleicons.org/logitech/000000",
  };

  const featuredBrands = [
    "Apple",
    "Nike",
    "Samsung",
    "Milton",
    "boAt",
    "Fossil",
    "Canon",
    "Anker",
    "Logitech",
    "Sony",
  ];

  return (
    <main className="bg-[#f7f5f0] text-stone-900">
      {/* =================================
          PREMIUM HERO
      ================================= */}
     <section
  className="relative overflow-hidden bg-cover bg-center text-white"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85')",
  }}
>
  <div className="absolute inset-0 bg-black/55"></div>

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
    <div className="max-w-xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-300">
        Premium Collection
      </p>

      <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
        Elevate Your
        <br />
        Everyday
      </h1>

      <p className="mt-6 text-base leading-7 text-stone-200 sm:text-lg">
        Discover carefully selected premium products designed for quality,
        style and a refined shopping experience.
      </p>

      <button
        onClick={() => navigate("newArrivals")}
        className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-black text-stone-900 transition hover:bg-stone-200"
      >
        Explore Collection →
      </button>
    </div>
  </div>
</section>

      {/* =================================
          PREMIUM CATEGORIES
      ================================= */}
      <section className="premium-category-section mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8">
        <p className="premium-category-label text-sm font-bold tracking-[0.25em]">
  EXPLORE
</p>

<h2 className="premium-category-heading mt-3 text-4xl font-black">
  Premium
  <br />
  Categories
</h2>

<p className="premium-category-intro mt-3 max-w-xl text-base">
  Discover collections curated for the premium shopper.
</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {premiumCategories.map((category) => (
            <button
              key={category.name}
              onClick={() =>
                navigate("PremiumBrands", {
                  category: category.filter,
                })
              }
              className="group overflow-hidden rounded-3xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="premium-category-name text-2xl font-black">
  {category.title}
</h3>

<p className="premium-category-description mt-2 text-base">
  {category.description}
</p>
<span className="premium-category-explore mt-6 inline-block font-bold">
  Explore →
</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =================================
          FEATURED BRANDS
      ================================= */}
      <section className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
        <div className="premium-featured-brands-container flex h-[82px] items-center gap-4 rounded-2xl bg-[#f8f8f8] px-5">
          {/* FEATURED BRANDS TITLE */}
          <div className="flex h-full w-[125px] shrink-0 items-center border-r border-gray-300">
            <h2 className="text-3xl font-bold premium-featured-brands">
              Featured
              <br />
              Brands
            </h2>
          </div>

          {/* BRAND LOGOS */}
          <div className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden">
            {featuredBrands.map((brand) => {
              return (
                <button
                  key={brand}
                  onClick={() =>
                    navigate("PremiumBrands", {
                      brands: true,
                      brand,
                    })
                  }
                  className="premium-brand-card flex h-[56px] min-w-[100px] shrink-0 items-center justify-center rounded-xl bg-white px-4 hover:shadow-md"
                >
                  <img
                    src={logos[brand]}
                    alt={brand}
                    className="max-h-[28px] max-w-[75px] object-contain"
                  />
                </button>
              );
            })}
          </div>

          {/* VIEW ALL BRANDS */}
          <button
            onClick={() => navigate("PremiumBrands")}
            className="flex h-[48px] shrink-0 items-center rounded-full border border-gray-300 bg-white px-5 text-sm font-bold text-stone-900 transition hover:bg-stone-900 hover:text-white"
          >
            View All Brands
            <span className="ml-2 text-lg">→</span>
          </button>
        </div>
      </section>

      {/* =================================
          PREMIUM NEW ARRIVALS
      ================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="premium-selection-label text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
  Premium Selection
</p>

<h2 className="premium-new-arrivals-title mt-2 text-3xl font-black sm:text-4xl">
  New Arrivals
</h2>

<p className="premium-new-arrivals-description mt-2 text-stone-500">
  Explore the latest premium products from our collection.
</p>
          </div>

          <button
            onClick={() => navigate("newArrivals")}
            className="premium-new-arrivals-button text-sm font-black text-stone-700 hover:text-black"
          >
            View All New Arrivals →
          </button>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {premiumProducts.map((product) => (
            <Product key={product.id} product={product} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* =================================
          PREMIUM FOOTER BANNER
      ================================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-stone-900 px-6 py-12 text-center text-white sm:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-400">
            Premium Experience
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Discover Something Exceptional
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-stone-300">
            Explore premium products, curated collections and the latest
            arrivals selected for your shopping experience.
          </p>

          <button
            onClick={() => navigate("newArrivals")}
            className="mt-7 rounded-full bg-white px-7 py-3 text-sm font-black text-stone-900 transition hover:bg-stone-200"
          >
            Explore New Arrivals →
          </button>
        </div>
      </section>
    </main>
  );
}

export default PremiumHome;
