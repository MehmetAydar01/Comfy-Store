const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Comfy store is awesome. If you come to comfy store, you will feel good.
        Comfy store chooses the most suitable product for you. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Aperiam, asperiores doloribus.
        Dolorem odio sapiente cumque veritatis fuga placeat nemo ipsum quidem
        odit voluptatum eaque architecto consectetur enim facere cum tempore
        nulla, fugiat quia esse.
      </p>
    </>
  );
};

export default About;
