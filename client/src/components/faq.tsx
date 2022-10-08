import React,  {useRef} from 'react';
import { AiOutlinePlus } from 'react-icons/ai'


const Faq:React.FC = () => {

    const discriptionRef_1 = useRef<HTMLDivElement>(null);
    const discriptionRef_2 = useRef<HTMLDivElement>(null);
    const discriptionRef_3 = useRef<HTMLDivElement>(null);
    const discriptionRef_4 = useRef<HTMLDivElement>(null);
    const discriptionRef_5 = useRef<HTMLDivElement>(null);
    const discriptionRef_6 = useRef<HTMLDivElement>(null);

    const onClickHandler = (id: number):void => {

        let arrayOfClasses:string[] | undefined;

        switch(id) {
            case 1:

                    arrayOfClasses = discriptionRef_1.current?.classList.value.split(' ');
                    if(arrayOfClasses?.includes('hidden')) {
                        
                        discriptionRef_1.current?.classList.remove('hidden');
                        discriptionRef_2.current?.classList.add('hidden');
                        discriptionRef_3.current?.classList.add('hidden');
                        discriptionRef_4.current?.classList.add('hidden');
                        discriptionRef_5.current?.classList.add('hidden');
                        discriptionRef_6.current?.classList.add('hidden');
                    }else {
                        discriptionRef_1.current?.classList.add('hidden');
                    }

                break;
            case 2:

                    arrayOfClasses = discriptionRef_2.current?.classList.value.split(' ');
                    if(arrayOfClasses?.includes('hidden')) {
                        discriptionRef_1.current?.classList.add('hidden');
                        discriptionRef_2.current?.classList.remove('hidden');
                        discriptionRef_3.current?.classList.add('hidden');
                        discriptionRef_4.current?.classList.add('hidden');
                        discriptionRef_5.current?.classList.add('hidden');
                        discriptionRef_6.current?.classList.add('hidden');
                    }else {
                        discriptionRef_2.current?.classList.add('hidden');
                    }
                break;
            case 3:

                    arrayOfClasses = discriptionRef_3.current?.classList.value.split(' ');
                    if(arrayOfClasses?.includes('hidden')) {
                        discriptionRef_1.current?.classList.add('hidden');
                        discriptionRef_2.current?.classList.add('hidden');
                        discriptionRef_3.current?.classList.remove('hidden');
                        discriptionRef_4.current?.classList.add('hidden');
                        discriptionRef_5.current?.classList.add('hidden');
                        discriptionRef_6.current?.classList.add('hidden');
                    }else {
                        discriptionRef_3.current?.classList.add('hidden');
                    }
                break;
            case 4:

                    arrayOfClasses = discriptionRef_4.current?.classList.value.split(' ');
                    if(arrayOfClasses?.includes('hidden')) {
                        discriptionRef_1.current?.classList.add('hidden');
                        discriptionRef_2.current?.classList.add('hidden');
                        discriptionRef_3.current?.classList.add('hidden');
                        discriptionRef_4.current?.classList.remove('hidden');
                        discriptionRef_5.current?.classList.add('hidden');
                        discriptionRef_6.current?.classList.add('hidden');
                    }else {
                        discriptionRef_4.current?.classList.add('hidden');
                    }
                break;
            case 5:
                    arrayOfClasses = discriptionRef_5.current?.classList.value.split(' ');
                    if(arrayOfClasses?.includes('hidden')) {
                        discriptionRef_1.current?.classList.add('hidden');
                        discriptionRef_2.current?.classList.add('hidden');
                        discriptionRef_3.current?.classList.add('hidden');
                        discriptionRef_4.current?.classList.add('hidden');
                        discriptionRef_5.current?.classList.remove('hidden');
                        discriptionRef_6.current?.classList.add('hidden');
                    }else {
                        discriptionRef_5.current?.classList.add('hidden');
                    }
                break;
            case 6:
                    arrayOfClasses = discriptionRef_6.current?.classList.value.split(' ');
                    if(arrayOfClasses?.includes('hidden')) {
                        discriptionRef_6.current?.classList.remove('hidden');
                        discriptionRef_1.current?.classList.add('hidden');
                        discriptionRef_2.current?.classList.add('hidden');
                        discriptionRef_3.current?.classList.add('hidden');
                        discriptionRef_4.current?.classList.add('hidden');
                        discriptionRef_5.current?.classList.add('hidden');
                    }else {
                        discriptionRef_6.current?.classList.add('hidden');
                    }
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <h1 className='text-white my-16 font-semibold text-5xl text-center'>Frequently Asked Questions</h1>
            <div className='w-[55vw] mx-auto border-b-8 border-[#272525]'>
                <div className='w-[100%] mb-2'>
                    <button className='w-[100%] relative text-white text-3xl font-normal text-left py-6 px-12 bg-[#363636] mb-[2px]' onClick={()=>{onClickHandler(1)}}>What is Netflix? <AiOutlinePlus className=' inline absolute right-12'/> </button>
                    <div className='w-[100%] p-9 font-normal text-2xl  bg-[#363636] text-white hidden'  ref={discriptionRef_1}>
                        <h1 className='text-start'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</h1>
                    </div>
                </div>
                <div className='w-[100%] mb-2'>
                    <button className='w-[100%] relative text-white text-3xl font-normal text-left py-6 px-12 bg-[#363636] mb-[2px]' onClick={()=>{onClickHandler(2)}}>How much does Netflix cost? <AiOutlinePlus className=' inline absolute right-12'/></button>
                    <div className='w-[100%] p-9 font-normal text-2xl  bg-[#363636] text-white hidden' ref={discriptionRef_2}>
                        <h1 className='text-start'>Watch Metaflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$3.99 to US$11.99 a month. No extra costs, no contracts.</h1>
                    </div>
                </div>
                <div className='w-[100%] mb-2'>
                    <button className='w-[100%] relative text-white text-3xl font-normal text-left py-6 px-12 bg-[#363636] mb-[2px]' onClick={()=>{onClickHandler(3)}}>Where can I watch? <AiOutlinePlus className=' inline absolute right-12'/></button>
                    <div className='w-[100%] p-9 font-normal text-2xl  bg-[#363636] text-white hidden' ref={discriptionRef_3}>
                        <h1 className='text-start'>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </h1>
                    </div>
                </div>
                <div className='w-[100%] mb-2'>
                    <button className='w-[100%] relative text-white text-3xl font-normal text-left py-6 px-12 bg-[#363636] mb-[2px]' onClick={()=>{onClickHandler(4)}}>How do I cancel?  <AiOutlinePlus className=' inline absolute right-12'/></button>
                    <div className='w-[100%] p-9 font-normal text-2xl  bg-[#363636] text-white hidden' ref={discriptionRef_4}>
                        <h1 className='text-start'>
                            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </h1>
                    </div>
                </div>
                <div className='w-[100%] mb-2'>
                    <button className='w-[100%] relative text-white text-3xl font-normal text-left py-6 px-12 bg-[#363636] mb-[2px]' onClick={()=>{onClickHandler(5)}}>What can I watch on Netflix? <AiOutlinePlus className=' inline absolute right-12'/></button>
                    <div className='w-[100%] p-9 font-normal text-2xl  bg-[#363636] text-white hidden' ref={discriptionRef_5}>
                        <h1 className='text-start'>
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </h1>
                    </div>
                </div>
                <div className='w-[100%] mb-2'>
                    <button className='w-[100%] relative text-white text-3xl font-normal text-left py-6 px-12 bg-[#363636] mb-[2px]' onClick={()=>{onClickHandler(6)}}>Is Netflix good for kids?  <AiOutlinePlus className=' inline absolute right-12'/></button>
                    <div className='w-[100%] p-9 font-normal text-2xl  bg-[#363636] text-white hidden' ref={discriptionRef_6}>
                        <h1 className='text-start'>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;