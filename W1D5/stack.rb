class Stack

  def initialize
    @stack = []

  end

  def push(ele)
    @stack.push(ele)
  end

  def pop
    @stack.pop
  end

  def peek
    return @stack.last
  end
end
