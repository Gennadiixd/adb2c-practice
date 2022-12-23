const withRateLimiter = (fn) => {
  let limit = 20;
  const q = [];
  const incLimit = async () => {
    limit++;
    if (q.length) {
      const dec = q.shift();
      dec();
    }
  };
  const decLimit = async () => {
    return new Promise((res) => {
      if (limit > 0) {
        limit--;
        res(limit);
      } else {
        q.push(async () => {
          if (limit > 0) {
            limit--;
            res(limit);
          }
        });
      }
    });
  };

  const limitedFn = async () => {
    await decLimit();
    const result = await fn(limit);
    await incLimit();
    return result;
  };

  return limitedFn;
};