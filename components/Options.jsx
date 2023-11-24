
import Arrow from '@/SVG/Arrow';
import * as Select from '@radix-ui/react-select';
import React from 'react';
function Options(props) {
  return (
    <div>
      <div className=' text-xs font-semibold text-gray-600'>{props.name}</div>
      <Select.Root defaultValue={0} onOpenChange={(e) => {
        let root = document.documentElement;
        setTimeout(() => {
          root.style.setProperty(`--cover-st`, e ? "block" : "none");
        }, 100);
      }}
      onValueChange={(e)=>{props.options[+e].callBack()}}>
        <Select.Trigger
          className=" outline-none flex items-center text-[12px] cursor-pointer select-none"
          aria-label="Food"
        >
          <Select.Value placeholder="select" />
          <Select.Icon className="SelectIcon">
            <Arrow className={`w-2 h-2 transition-all `} style={{ rotate: `var(--option-${props.name})` }} />
          </Select.Icon>

        </Select.Trigger>
        <Select.Portal>
          <Select.Content align='end' position='popper' className="z-[100] before:top-0 shadow-md overflow-hidden bg-white rounded-md ">
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px] ">


              {/* <SelectItem value="apple">Apple</SelectItem> */}

              {
                props.options.map((e, n) => (
                  <SelectItem className={" hover:bg-gray-100 cursor-pointer"} key={n} value={n}>{e.name}</SelectItem>
                ))
              }

            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>

      </Select.Root>
    </div>
  )
}

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={
        'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1' + className
      }
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
      </Select.ItemIndicator>
    </Select.Item>
  );
});


export default Options