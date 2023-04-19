import Button from "../Button";

export default function NewsLetter() {
  return (
    <section
      className="sm:max-w-[90%] max-w-[96%] mx-auto bg-[url('/src/assets/subscribe/bg.svg')] bg-cover 
    bg-no-repeat bg-neutral-600 bg-blend-overlay my-32 flex flex-col sm:flex-row sm:items-center 
    justify-center gap-10 lg:gap-32 py-10 px-6 sm:py-14 sm:px-10 md:py-20 md:px-14 md:flex-row"
    >
      <p className="text-white font-medium sm:basis-1/3 min-[500px]:text-lg min-[500px]:font-bold">
        Subscribe to our to our newsletter and receive exclusive offers week
      </p>
      <form className="sm:ml-auto w-full flex flex-col min-[330px]:flex-row gap-4 items-center sm:basis-2/3 justify-center">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full rounded-lg outline-none py-2 px-3 text-sm text-gray-600"
        />
        <Button style="bg-blue-600 px-5 py-3 text-white font-semibold">
          Subscribe
        </Button>
      </form>
    </section>
  );
}
