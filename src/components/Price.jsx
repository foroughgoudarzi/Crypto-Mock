import useSWR from "swr";

function Price(props) {
  const fetcher = (...args) =>
    fetch(new Request(...args), {
      method: "GET",
      headers: new Headers({
        "content-type": "application/json",
        authorization:
          'Apikey "7a8bd0d679fc1ef6e8884f50d98b9936c0323c5dea683ebb9952a67e4adddeef"',
      }),
    }).then(function (response) {
      return response.json();
    });

  const { data, error, isLoading } = useSWR(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${props.crypto}&tsyms=GBP`,
    fetcher,
    { refreshInterval: 1000000 }
  );

  return (
    <div>
      {error ? (
        <div>failed to load</div>
      ) : isLoading ? (
        <div>loading...</div>
      ) : (
        <p>
          Price: {data.DISPLAY[props.crypto].GBP.PRICE}
          <span
            className={
              data.DISPLAY[props.crypto].GBP.CHANGEPCTDAY > 0
                ? "text-success ms-4"
                : "text-danger ms-4"
            }
          >
            {data.DISPLAY[props.crypto].GBP.CHANGEPCTDAY}%
          </span>
        </p>
      )}
    </div>
  );
}

export default Price;