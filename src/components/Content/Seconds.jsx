export default function Seconds(props) {
  return (
    <div className="grid grid-rows-[0.8fr_0.2fr] gap-4">
      <div className="h-20 w-20 landscape:h-28 landscape:w-28 landscape:lg:h-40 landscape:lg:w-40 grid grid-rows-2 gap-[0.08rem] relative shadow-[0_0.5rem] shadow-mostly-dark-blue landscape:shadow-[0_0.6rem] landscape:shadow-mostly-dark-blue rounded-b-md">
        <div className="bg-dark-desaturated-blue brightness-[.80] rounded-t-md relative overflow-hidden hover:translate">
          <h1 className="text-soft-red text-5xl landscape:text-6xl landscape:lg:text-8xl absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
            {props.seconds}
          </h1>
        </div>
        <div className="bg-dark-desaturated-blue rounded-b-md relative overflow-hidden">
          <h1 className="text-soft-red text-5xl landscape:text-6xl landscape:lg:text-8xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {props.seconds}
          </h1>
        </div>
        <div className="bg-mostly-dark-blue w-1.5 h-3 rounded-[0.5rem_0_0_0.5rem] absolute right-0 top-1/2 -translate-y-1/2"></div>
        <div className="bg-mostly-dark-blue w-1.5 h-3 rounded-[0_0.5rem_0.5rem_0] absolute left-0 top-1/2 -translate-y-1/2"></div>
      </div>
      <div className="text-greyish-blue text-center tracking-[0.3rem] font-normal text-xs landscape:lg:text-sm">
        SECONDS
      </div>
    </div>
  );
}
