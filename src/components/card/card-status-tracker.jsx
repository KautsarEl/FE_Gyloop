import React from 'react'

export default function CardStatusTracker({ items, dropdown, btnNext, next, activeCaretDown, activeStatus, status, activeArrow, line, width, title,}) {
//   const CheckboxGroup = Checkbox.Group;
  
//   const DropdownStatus = () => {
//     return (
//       <>
//         <Dropdown
//           trigger={['click']}
//           placement='bottom'
//           dropdownRender={() => (
//             <>
//               <div className='bg-white w-[200px] shadow-dropdown'>
//                 <div className='h-[70px] p-[15px] flex flex-col gap-[4px] '>
//                   <h6 className='p-0 m-0 font-semibold'>{title}</h6>
//                   <p className='p-0 m-0 text-[12px]'>Task Complete</p>
//                 </div>
//                 <div className='checkboxDoStatus'>
//                   <CheckboxGroup options={items} className='flex flex-col' />
//                 </div>
//                 <div className='flex items-center justify-center w-full p-[15px]'>
//                   {next ?
//                     <button onClick={btnNext} className='bg-blue-primary text-white text-[16px] w-full py-[5px] rounded-[3px]'>Next Stage</button>
//                     :
//                     <button disabled className='bg-[#cecece] text-white text-[16px] w-full py-[5px] rounded-[3px] cursor-not-allowed'>Next Stage</button>
//                   }
//                 </div>
//               </div>
//             </>
//           )}
//         >
//           <i className={`far fa-caret-circle-down ${activeCaretDown} cursor-pointer absolute top-[6px] right-[-25px] w-fit`}></i>
//         </Dropdown>
//       </>
//     )
//   }
  return (
    <div className='w-[145px] sm:h-[80px] h-[62px] flex flex-col justify-end' >
      <div className='h-[52px] flex justify-center items-center gap-[8px] bg-[#eaedf4] w-full relative'>
        <div className='pt-[5px] relative'>
          <p className={`p-0 m-0 font-bold text-[13px] ${activeStatus} `}>{status}</p>
          {/* {dropdown ?
           <DropdownStatus/> : <i className={`far fa-caret-circle-down text-[#cecece] cursor-not-allowed absolute top-[6px] right-[-25px]`}></i>
          } */}
        </div>
        <div className='flex items-center absolute top-[4%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
          <span className={`${activeArrow} w-[26px] h-[26px] flex items-center justify-center rounded-[100%] relative`}>
            <i className='fars-chevron-right text-white'></i>
            <span className={`${line} ${width} h-[3px] absolute z-10 right-[26px]`}></span>
          </span>
        </div>
      </div>
    </div>
  )
}
