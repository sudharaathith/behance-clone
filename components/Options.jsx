import * as Select from '@radix-ui/react-select';
import React from 'react';
function Options(props) {
    console.log(props.options)
  return (
    <Select.Root >
            <Select.Trigger
      className=""
      aria-label="Food"
    >
      <Select.Value placeholder="Select a fruit…" />

    </Select.Trigger>
    <Select.Portal>
      <Select.Content align='end' position='popper' className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px]">
            
          
            {/* <SelectItem value="apple">Apple</SelectItem> */}
            {
                props.options.map((e)=>{
                    <SelectItem value={e.name}>{e.name}</SelectItem>
                })
            }
                      <Select.Group>
            <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
              Meat
            </Select.Label>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
            {
                props.options.map((e,n)=>(
                    <SelectItem key={n} value={e.name.toLowerCase()}>{e.name}</SelectItem>
                ))
            }
          </Select.Group>

        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>

    </Select.Root>
  )
}

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={
          'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1'+className
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