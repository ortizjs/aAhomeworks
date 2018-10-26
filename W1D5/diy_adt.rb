class Stack
  attr_reader :stack
  def initialize
    @stack = []

  end

  def push(ele)
    @stack.push(ele)
    ele
  end

  def pop
    @stack.pop
  end

  def peek
    return @stack.last
  end
end

class Queue
  attr_reader :queue
  def initialize
    @queue = []
  end

  def enqueue(ele)
    @queue.unshift(ele)
    ele
  end

  def dequeue
    @queue.pop
  end

  def peek
    @queue.first
  end
end
