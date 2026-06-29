

const Container = ({children}) => {//children is a prop that allows you to pass in any content you want to be rendered inside the container. It can be a string, a number, a React element, or an array of React elements. The Container component will render the children inside a div with some styling applied to it.
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container
