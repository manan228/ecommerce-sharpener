const Music = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <h1>Music</h1>
      <section>
        {productsArr.map((music) => {
          return <>
            <div>
                <h2>{music.title}</h2>
              <img src={music.imageUrl} alt={music.title}/>
            </div>
            <span>${music.price}</span>
            <button>Add To Cart</button>
            </>;
        })}
      </section>
    </>
  );
};

export default Music;