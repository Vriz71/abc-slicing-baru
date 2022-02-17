import Link from 'next/link'
import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <title>Art By Code</title>

      <Navbar />
      {/* py tiap section 16 */}

      {/* First Section */}
      <section className='container columns-1 mx-10 md:grid md:grid-cols-2 md:mx-16 lg:grid lg:grid-cols-2 lg:px-28 lg:mx-0 py-32'>
        <div className='w-80 md:mt-24 lg:mt-28'>
          <p className='font-display font-light text-sm font-thin text-trans tracking-wide'>Kami adalah <span className='font-display2 font-extrabold text-main-color text-lg'>Art By Code | ABC</span></p>
          <p className='font-display font-extra-bold text-3xl py-6'>
            Ayo ciptakan sesuatu yang indah dari sebuah kode
          </p>
          <button className='bg-main-color hover:bg-main-hover font-display font-normal text-xs text-white rounded-lg p-3'><span className='m-1'>Mau tau lebih banyak</span></button>
        </div>
        <div className='mr-8 pt-20 md:pt-6 md:-ml-12 md:w-full lg:pt-4 lg:ml-16 lg:w-full'>
          <img src='/homepage.png' />
        </div>
      </section>

      {/* Second Section */}
      <section className='py-16'>
        <div className="grid justify-items-center ml-3">
          <div className='w-7 h-1 bg-main-color rounded-lg'></div>
          <p className='pt-2 font-display font-extra-bold text-3xl'>Solusi Kami</p>

          <div className='pt-20 md:grid md:grid-cols-2 md:pt-20 lg:grid lg:grid-cols-3 lg:gap-2 lg:mt-6'>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='web-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='bg-zinc-100 p-2 rounded-full border-2'>
                  <img src='/web-btn.svg' />
                </button><span className='font-display font-extra-bold ml-5 text-lg'>Web Development</span>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='/mobile-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='bg-zinc-100 p-2 rounded-full border-2'>
                  <img src='/mobile-btn.svg' />
                </button><span className='font-display font-extra-bold ml-5 text-lg'>App Development</span>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='ui-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='bg-zinc-100 p-2 rounded-full border-2'>
                  <img src='/ui-btn.svg' />
                </button><span className='font-display font-extra-bold ml-5 text-lg'>UI/UX Design</span>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='ml-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='bg-zinc-100 p-2 rounded-full border-2'>
                  <img src='/ml-btn.svg' />
                </button><span className='font-display font-extra-bold ml-5 text-lg'>Machine Learning</span>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='workflow-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='bg-zinc-100 p-2 rounded-full border-2'>
                  <img src='/workflow-btn.svg' />
                </button><span className='font-display font-extra-bold ml-5 text-lg'>Workflow Automation</span>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='/branding-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='bg-zinc-100 p-2 rounded-full border-2'>
                  <img src='/branding-btn.svg' />
                </button><span className='font-display font-extra-bold ml-5 text-lg'>Branding & Digital Ads</span>
              </div>
            </div>

          </div>
          <div className='grid justify-items-center'>
            <button className='bg-main-color hover:bg-main-hover rounded-lg font-display font-normal text-xs text-white p-3'><span className='m-1'>Lihat detailnya dong</span></button>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className='py-16'>
        <div className="grid justify-items-center ml-3">
          <div className='w-7 h-1 bg-main-color rounded-lg'></div>
          <p className='pt-2 font-display font-extra-bold text-3xl'>Klien Kami</p>

          <div className='pt-20 ml-10 md:w-9/12'>
            <div className='grid grid-cols-3 px-8 md:grid-cols-6 md:px-2 lg:grid-cols-6 lg:items-center gap-8'>
              <img src='/client/CT Corp.svg' />
              <img src='/client/Transmall.svg' />
              <img src='/client/Kyoob.svg' />
              <img src='/client/Mufit.svg' />
              <img src='/client/VBD.svg' />
              <img src='/client/Schoolmedia.svg' />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 md:px-2 lg:items-center mt-10 px-10 gap-8'>
              <img src='/client/Al Fajar Bekasi.svg' className='w-3/5' />
              <img src='/client/Peradi.svg' className='mt-3 lg:mt-0 lg:-ml-10' />
              <img src='/client/LSP Menbiska.svg' />
              <img src='/client/Medco.svg' className='mt-2' />
              <img src='/client/Bank DKI.svg' className='mt-4 md:ml-40 lg:ml-48' />
              <img src='/client/Docotel.svg' className='md:ml-40 lg:ml-52' />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <div className="grid justify-items-center text-center md:w-2/5 md:mx-auto ml-10 py-12 -mt-16">
        <Image
          src='/footer.svg'
          alt='Footer'
          width={290}
          height={290}
        />
        <p className='font-display font-extra-bold text-3xl'>Apakah kamu siap?</p>
        <div className='lg:w-96'>
          <p className='font-display font-normal lg:text-sm lg:px-3 pt-3'>Beritahu kami apa yang mau kamu bangun atau kesulitan apa yang kamu hadapi</p>
        </div>
        <Link href="/hubungi">
          <button className="border border-main-color mt-12 md:text-sxs lg:text-sm lg:mt-16 font-bold font-display text-main-color hover:text-white hover:bg-main-color rounded-lg p-2 ml-4 mb-2 m-1">Hubungi Kami</button>
        </Link>
      </div>
    </div>
  )
}
