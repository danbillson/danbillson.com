import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work history.",
};

export default function Work() {
  return (
    <section>
      <h1 className="font-medium text-2xl mt-14 mb-8 tracking-tighter">
        my work
      </h1>
      <div className="prose prose-neutral">
        <p>
          I am a well rounded engineer with experience across the board, I like
          to focus on creating a great developer experience, knowledge sharing
          and getting my team aligned.
        </p>

        <hr className="my-6 border-neutral-100" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">SoPost</h2>
        <p className="text-neutral-600 text-sm">Senior Software Engineer</p>
        <p>
          I joined <a href="https://sopost.com">SoPost</a> in 2021 as a Software
          Engineer as part of the Platform team helping build out the core
          product which includes apps to build and manage sampling campaigns,
          dynamic landing pages and emails, and a builder interface to configure
          those pages and emails.
        </p>
        <ul>
          <li>
            In 2022, I worked actively with our designers to build out our
            component library and design system.
          </li>
          <li>
            In 2023, I was promoted to Senior Software Engineer and started the
            Front end guild and started leading brown bag sessions as well as
            the SoCode Summer School program.
          </li>
          <li>
            In 2024, I started the rebuild of our core data capture platform
            transitioning from Elixir/Phoenix over to Next.js from RFC to proof
            of concept through to complete project.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Climb Creative
        </h2>
        <p className="text-neutral-600 text-sm">
          Front-end developer, 2020 - 2021
        </p>
        <p>
          After moving back up north, I joined another small dev team at Climb
          Creative who are part of the Precision Proco Group, a huge part of
          printing across the country. With this new line of business came lots
          of new challenges and exciting projects to work on all with a very
          hands on approach.
        </p>
        <p>
          I worked primarlily on <a href="https://wttb.co.uk/">WTTB</a> and led
          the rebuild of the product page and checkout flow as well as the Canva
          integration to design your own products.
        </p>

        <hr className="my-6 border-neutral-100" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Marmalade</h2>
        <p className="text-neutral-600 text-sm">
          Front-end developer, 2019 - 2020
        </p>
        <p>
          Contrary to The Hut Group, Marmalade has a much smaller dev team
          meaning that there is much more room for advancing technologies,
          impactful changes and responsibility. As a team we have worked with
          Gatsby, Lerna monorepos and the latest in React.
        </p>
        <p>
          I built the{" "}
          <a href="https://www.wearemarmalade.co.uk/driver-hub">
            Driver Hub Blog
          </a>{" "}
          with Gastby and headless Drupal and worked with aggregators such as
          Moneysupermarket and Compare the Market to create automated scripts
          with puppeteer that could run over 100 quotes concurrently to test the
          integrations.
        </p>

        <hr className="my-6 border-neutral-100" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">THG</h2>
        <p className="text-neutral-600 text-sm">
          Graduate Front-end developer, 2018
        </p>
        <p>
          Straight out of university I had landed myself a role as a graduate
          front end developer at The Hut Group which is a very large online
          retailer owning companies such as MyProtein. In this role I was
          introduced to a variety of different tools and practices that really
          help a large company function.
        </p>
        <p>
          I worked as part of the site builds team working on large projects
          such as Neutrogena and Gillette as well as helping out with the
          MyProtein re-brand.
        </p>
      </div>
    </section>
  );
}
