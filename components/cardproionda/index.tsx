export type Product = {
  name: string;
  price: number;
  src: string;
};

export function CardProionda(props: Product) {
  return (
    <div className="card w-full bg-base-300 shadow-xl border border-base-100 ">
      <figure className="px-10 pt-10">
        <img
          src="http://dummyimage.com/250x250.png/cc0000/ffffff"
          alt="Shoes"
          className="rounded-xl w-full h-28"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xs h-10">{props.name}</h2>
        <div className="card-actions">
          <button className="btn badge ">{props.price}€ Buy Now</button>
        </div>
      </div>
    </div>
  );
}
