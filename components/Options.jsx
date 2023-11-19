
import Arrow from '@/SVG/Arrow';
import * as Select from '@radix-ui/react-select';
import React from 'react';
function Options(props) {
  console.log(props.options)
  return (
    <div>
      <div className=' text-xs font-semibold text-gray-600'>{props.name}</div>
      <Select.Root defaultValue={0} onOpenChange={(e) => {
        let root = document.documentElement;
        root.style.setProperty(`--option-${props.name}`, e ? "90" : "0");
      }}
      onValueChange={(e)=>{props.options[+e].callBack()}}>
        <Select.Trigger
          className=" outline-none flex items-center text-[12px]"
          aria-label="Food"
        >
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon className="SelectIcon">
            <Arrow className={`w-2 h-2 transition-all `} style={{ rotate: `var(--option-${props.name})` }} />
          </Select.Icon>

        </Select.Trigger>
        <Select.Portal>
          <Select.Content align='end' position='popper' className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">


              {/* <SelectItem value="apple">Apple</SelectItem> */}

              {
                props.options.map((e, n) => (
                  <SelectItem key={n} value={n}>{e.name}</SelectItem>
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