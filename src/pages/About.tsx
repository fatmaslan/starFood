const About = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <div className=" bg-gray-400 w-full min-h-screen flex items-center mt-10 ">
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 px-5 md:px-20 ">
          <h2 className="text-white text-5xl sm:text-7xl md:text-9xl font-serif text-center md:text-left">About</h2>
          <p className="text-gray-800 text-sm sm:text-base text-justify leading-relaxed">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page.<br></br> I’m a great place for you to tell a
            story and let your users know a little more about you. This is a
            great space to write long text about your company and your services.
            You can use this space to go into a little more detail about your
            company. Talk about your team and what services you provide.<br></br> Tell
            your visitors the story of how you came up with the idea for your
            business and what makes you different from your competitors. Make
            your company stand out and show your visitors who you are. Let
            visitors to your website know that they'll<br></br> find what they're looking
            for right here. Present your company as the solution to a specific
            problem and highlight the ways your services can make life better
            for people.<br></br> In a few words, explain the impact your company has had,
            or hopes to have, on its community and the world. Tell readers how
            your company puts its users first. Emphasize how it looks out for
            them, finding solutions to meet their needs and keep them satisfied.
            Reassure potential customers that they won't regret choosing your
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
