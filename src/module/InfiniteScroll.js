const InfiniteScroll = ($lastElement, callback) => {
  const isOption = {
    threshold: [0.8], // 마지막 컨텐츠가 80%노출됐을 때 트리거
  };

  const io = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // API CALLING
        observe.unobserve(entry.target);
        callback && callback();
      }
    });
  }, isOption);

  if ($lastElement) {
    io.observe($lastElement);
  }
};

export default InfiniteScroll;
