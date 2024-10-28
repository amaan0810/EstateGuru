export default function About() {
  return (
    <div className="bg-white py-20 px-4 mx-auto">
      <div className=" max-w-6xl mx-auto">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-blue-700">
            About EstateGuru
          </h1>
          <p>
            Welcome to <strong>EstateGuru</strong>, your trusted partner in the
            world of real estate. We are dedicated to simplifying and enhancing
            your real estate experience, whether you’re buying, selling,
            renting, or investing. Our platform brings together cutting-edge
            technology and industry expertise to deliver a seamless and
            user-friendly experience, tailored to meet the unique needs of
            property seekers and owners alike.
          </p>
        </header>

        <br />

        <section>
          <h2 className="text-xl font-bold mb-4 text-blue-700">Our Mission</h2>
          <p>
            At EstateGuru, our mission is to revolutionize the real estate
            industry by providing accessible, transparent, and efficient
            solutions for property transactions. We believe in empowering our
            users by connecting them with valuable resources, real-time data,
            and expert guidance. Our goal is to make every real estate journey
            smooth, informed, and rewarding.
          </p>
        </section>

        <br />

        <section>
          <h2 className="text-xl font-bold mb-4 text-blue-700">
            What We Offer
          </h2>
          <ul>
            <li>
              <strong>Comprehensive Property Listings</strong>: Explore a wide
              range of residential and commercial properties, with detailed
              listings that include high-quality images, virtual tours, and
              accurate information.
            </li>
            <li>
              <strong>User-Friendly Interface</strong>: We’ve designed our
              platform to be intuitive and easy to navigate, making it simple
              for users of all backgrounds to find exactly what they need.
            </li>
            <li>
              <strong>Advanced Search and Filters</strong>: Find properties that
              meet your specific criteria, with filtering options based on
              location, price range, property type, and more.
            </li>
            {/* <li>
              <strong>Secure and Reliable Transactions</strong>: Our platform
              prioritizes security and transparency, providing a safe
              environment for all transactions.
            </li> */}
            <li>
              <strong>Expert Insights and Support</strong>: Access market
              trends, area analyses, and expert advice from real estate
              professionals to make well-informed decisions.
            </li>
          </ul>
        </section>

        <br />

        <section>
          <h2 className="text-xl font-bold mb-4 text-blue-700">
            Why Choose EstateGuru?
          </h2>
          <p>
            With EstateGuru, you’re not just accessing a property listing
            website; you’re becoming part of a community dedicated to reshaping
            real estate for the better. We prioritize customer satisfaction,
            innovation, and trust, ensuring that every interaction with us is
            valuable and productive.
          </p>
          <p>
            Whether you’re a first-time buyer, seasoned investor, or looking for
            the perfect rental, EstateGuru is here to support you every step of
            the way. Let’s make your real estate journey a success—explore
            EstateGuru today.
          </p>
        </section>
      </div>
    </div>
  );
}
