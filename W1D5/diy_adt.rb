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

class Queue

  def initialize
    @queue = []
  end

  def enqueue(ele)
    @queue.unshift(ele)
  end

  def dequeue
    @queue.pop
  end

  def peek
    @queue.first
  end
end
